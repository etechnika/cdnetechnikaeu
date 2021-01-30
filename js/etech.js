ETECH = {};

/**
 * Add inplace indicator to html 
 * @param {Object} id
 * @param {Object} strMsg
 */
ETECH.waiting = function( sElemId, sMessage ) {
  oElem = $(sElemId);
  if( sMessage == null ) { var sMessage = 'wczytywanie...'; }
  Elem.update( '<span class="waiting">'+sMessage+'</span>' );
  Elem.show();
} // ETECH.waiting

/**
 * Code tips live search
 */
ETECH.loadCodeTips = function() {
  var objSearchCodeTipForm = $('#searchCodeTipForm');
  var objCodeTipLoader = objSearchCodeTipForm.find('#codeTipSearchLoader');
  var objUpdateArea = $('#codeTipUpdateArea');
  var objSearchInput = objSearchCodeTipForm.find('#searchCodeTip');
  var objBtnSearch = objSearchCodeTipForm.find('input[type="submit"]');

  objCodeTipLoader.show();
  objUpdateArea.hide();
  objBtnSearch.attr('disabled','disabled');
  objUpdateArea.load(
    objSearchCodeTipForm.attr('action'),
    { searchCodeTip: objSearchInput.val() },
    function() {
      objCodeTipLoader.hide();
      objUpdateArea.show();
      objBtnSearch.removeAttr('disabled');
    }
  );
};

$(document).ready(function() {
  $('#searchCodeTipForm input[type="submit"]').live( 'click', function(e) {
    e.preventDefault();
    ETECH.loadCodeTips();
  });
});