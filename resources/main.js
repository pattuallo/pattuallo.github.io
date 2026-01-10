/* Main JS for Dividend Data - Responsive Injection */

$(document).ready(function () {
  console.log("Main JS loaded. Starting responsive injection...");

  // 1. Find the table and wrap it in a responsive container
  var $table = $('table.dataframe');
  if ($table.length > 0 && !$table.parent().hasClass('table-responsive-custom')) {
    $table.wrap('<div class="table-responsive-custom"></div>');
    console.log("Table wrapped in .table-responsive-custom");
  }

  // 2. Initialize (or re-initialize) Tablesorter
  // We use the jquery-tablesorter library already present in the HTML
  $(".tablesorter").tablesorter({
    theme: "bootstrap", // This is just a placeholder to use custom classes
    cssAsc: 'tablesorter-headerAsc',
    cssDesc: 'tablesorter-headerDesc',
    headerTemplate: '{content} {icon}',
    widgets: ["zebra"]
  });

  console.log("Tablesorter initialized.");
});
