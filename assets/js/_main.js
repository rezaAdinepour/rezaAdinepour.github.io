/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let readStoredTheme = () => {
  try { return localStorage.getItem("theme"); } catch (error) { return null; }
};

let determineThemeSetting = () => {
  let themeSetting = readStoredTheme();
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const preference =
    theme ||
    readStoredTheme() ||
    $("html").attr("data-theme") ||
    browserPref;
  const use_theme = preference === "system" ?
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : preference;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
  $("#theme-toggle").attr({
    "aria-pressed": String(use_theme === "dark"),
    "aria-label": use_theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
  });
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", new_theme); } catch (error) { /* Storage may be disabled. */ }
  setTheme(new_theme);
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!readStoredTheme() || readStoredTheme() === 'system') {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // FitVids init
  fitvids();

  // Profile links are collapsible on small screens.
  $(".author__urls-wrapper button").on("click", function () {
    const open = $(this).closest('.author__urls-wrapper').toggleClass('is-open').hasClass('is-open');
    $(this).attr('aria-expanded', String(open));
  });

  $(document).on('keydown', function (event) {
    if (event.key === 'Escape' && $('.author__urls-wrapper').hasClass('is-open')) {
      $('.author__urls-wrapper').removeClass('is-open');
      $('.author__urls-wrapper button').attr('aria-expanded', 'false').trigger('focus');
    }
  });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $("a").smoothScroll({ offset: -24, preventDefault: false });
  }

});
