
export type RevogridEvents = 'contentsizechanged'|
  'beforeedit'|
  'beforerangeedit'|
  'afteredit'|
  'beforeautofill'|
  'beforerange'|
  'afterfocus'|
  'roworderchanged'|
  'beforesorting'|
  'beforesourcesortingapply'|
  'beforesortingapply'|
  'rowdragstart'|
  'headerclick'|
  'beforecellfocus'|
  'beforefocuslost'|
  'beforesourceset'|
  'beforeanysource'|
  'aftersourceset'|
  'afteranysource'|
  'beforecolumnsset'|
  'beforecolumnapplied'|
  'aftercolumnsset'|
  'beforefilterapply'|
  'beforefiltertrimmed'|
  'beforetrimmed'|
  'aftertrimmed'|
  'viewportscroll'|
  'beforeexport'|
  'beforeeditstart'|
  'aftercolumnresize'|
  'beforerowdefinition'|
  'filterconfigchanged'|
  'sortingconfigchanged'|
  'rowheaderschanged'|
  'beforegridrender'|
  'aftergridrender'|
  'aftergridinit'|
  'additionaldatachanged'|
  'afterthemechanged'|
  'created'|
  'beforepaste'|
  'beforepasteapply'|
  'pasteregion'|
  'afterpasteapply'|
  'beforecut'|
  'clearregion'|
  'beforecopy'|
  'beforecopyapply'|
  'copyregion'|
  'beforerowrender'|
  'afterrender'|
  'beforecellrender'|
  'beforedatarender'|
  'dragstartcell'|
  'celleditinit'|
  'closeedit'|
  'filterChange'|
  'resetChange'|
  'close'|
  'beforefocusrender'|
  'beforescrollintoview'|
  'afterfocus'|
  'beforeheaderclick'|
  'headerresize'|
  'beforeheaderresize'|
  'headerdblclick'|
  'beforeheaderrender'|
  'beforegroupheaderrender'|
  'afterheaderrender'|
  'rowdragstartinit'|
  'rowdragendinit'|
  'rowdragmoveinit'|
  'rowdragmousemove'|
  'rowdropinit'|
  'roworderchange'|
  'beforecopyregion'|
  'beforepasteregion'|
  'celleditapply'|
  'beforecellfocusinit'|
  'beforenextvpfocus'|
  'setedit'|
  'beforeapplyrange'|
  'beforesetrange'|
  'setrange'|
  'beforeeditrender'|
  'selectall'|
  'canceledit'|
  'settemprange'|
  'beforesettemprange'|
  'applyfocus'|
  'focuscell'|
  'beforerangedataapply'|
  'selectionchangeinit'|
  'beforerangecopyapply'|
  'rangeeditapply'|
  'clipboardrangecopy'|
  'clipboardrangepaste'|
  'beforekeydown'|
  'beforekeyup'|
  'beforecellsave'|
  'celledit'|
  'scrollview'|
  'ref'|
  'scrollvirtual'|
  'scrollviewport'|
  'resizeviewport'|
  'scrollchange'|
  'scrollviewportsilent'|
  'html'
export const REVOGRID_EVENTS = new Map<RevogridEvents, RevogridEvents>([
  ['contentsizechanged', 'contentsizechanged'],
  ['beforeedit', 'beforeedit'],
  ['beforerangeedit', 'beforerangeedit'],
  ['afteredit', 'afteredit'],
  ['beforeautofill', 'beforeautofill'],
  ['beforerange', 'beforerange'],
  ['afterfocus', 'afterfocus'],
  ['roworderchanged', 'roworderchanged'],
  ['beforesorting', 'beforesorting'],
  ['beforesourcesortingapply', 'beforesourcesortingapply'],
  ['beforesortingapply', 'beforesortingapply'],
  ['rowdragstart', 'rowdragstart'],
  ['headerclick', 'headerclick'],
  ['beforecellfocus', 'beforecellfocus'],
  ['beforefocuslost', 'beforefocuslost'],
  ['beforesourceset', 'beforesourceset'],
  ['beforeanysource', 'beforeanysource'],
  ['aftersourceset', 'aftersourceset'],
  ['afteranysource', 'afteranysource'],
  ['beforecolumnsset', 'beforecolumnsset'],
  ['beforecolumnapplied', 'beforecolumnapplied'],
  ['aftercolumnsset', 'aftercolumnsset'],
  ['beforefilterapply', 'beforefilterapply'],
  ['beforefiltertrimmed', 'beforefiltertrimmed'],
  ['beforetrimmed', 'beforetrimmed'],
  ['aftertrimmed', 'aftertrimmed'],
  ['viewportscroll', 'viewportscroll'],
  ['beforeexport', 'beforeexport'],
  ['beforeeditstart', 'beforeeditstart'],
  ['aftercolumnresize', 'aftercolumnresize'],
  ['beforerowdefinition', 'beforerowdefinition'],
  ['filterconfigchanged', 'filterconfigchanged'],
  ['sortingconfigchanged', 'sortingconfigchanged'],
  ['rowheaderschanged', 'rowheaderschanged'],
  ['beforegridrender', 'beforegridrender'],
  ['aftergridrender', 'aftergridrender'],
  ['aftergridinit', 'aftergridinit'],
  ['additionaldatachanged', 'additionaldatachanged'],
  ['afterthemechanged', 'afterthemechanged'],
  ['created', 'created'],
  ['beforepaste', 'beforepaste'],
  ['beforepasteapply', 'beforepasteapply'],
  ['pasteregion', 'pasteregion'],
  ['afterpasteapply', 'afterpasteapply'],
  ['beforecut', 'beforecut'],
  ['clearregion', 'clearregion'],
  ['beforecopy', 'beforecopy'],
  ['beforecopyapply', 'beforecopyapply'],
  ['copyregion', 'copyregion'],
  ['beforerowrender', 'beforerowrender'],
  ['afterrender', 'afterrender'],
  ['beforecellrender', 'beforecellrender'],
  ['beforedatarender', 'beforedatarender'],
  ['dragstartcell', 'dragstartcell'],
  ['celleditinit', 'celleditinit'],
  ['closeedit', 'closeedit'],
  ['filterChange', 'filterChange'],
  ['resetChange', 'resetChange'],
  ['close', 'close'],
  ['beforefocusrender', 'beforefocusrender'],
  ['beforescrollintoview', 'beforescrollintoview'],
  ['afterfocus', 'afterfocus'],
  ['beforeheaderclick', 'beforeheaderclick'],
  ['headerresize', 'headerresize'],
  ['beforeheaderresize', 'beforeheaderresize'],
  ['headerdblclick', 'headerdblclick'],
  ['beforeheaderrender', 'beforeheaderrender'],
  ['beforegroupheaderrender', 'beforegroupheaderrender'],
  ['afterheaderrender', 'afterheaderrender'],
  ['rowdragstartinit', 'rowdragstartinit'],
  ['rowdragendinit', 'rowdragendinit'],
  ['rowdragmoveinit', 'rowdragmoveinit'],
  ['rowdragmousemove', 'rowdragmousemove'],
  ['rowdropinit', 'rowdropinit'],
  ['roworderchange', 'roworderchange'],
  ['beforecopyregion', 'beforecopyregion'],
  ['beforepasteregion', 'beforepasteregion'],
  ['celleditapply', 'celleditapply'],
  ['beforecellfocusinit', 'beforecellfocusinit'],
  ['beforenextvpfocus', 'beforenextvpfocus'],
  ['setedit', 'setedit'],
  ['beforeapplyrange', 'beforeapplyrange'],
  ['beforesetrange', 'beforesetrange'],
  ['setrange', 'setrange'],
  ['beforeeditrender', 'beforeeditrender'],
  ['selectall', 'selectall'],
  ['canceledit', 'canceledit'],
  ['settemprange', 'settemprange'],
  ['beforesettemprange', 'beforesettemprange'],
  ['applyfocus', 'applyfocus'],
  ['focuscell', 'focuscell'],
  ['beforerangedataapply', 'beforerangedataapply'],
  ['selectionchangeinit', 'selectionchangeinit'],
  ['beforerangecopyapply', 'beforerangecopyapply'],
  ['rangeeditapply', 'rangeeditapply'],
  ['clipboardrangecopy', 'clipboardrangecopy'],
  ['clipboardrangepaste', 'clipboardrangepaste'],
  ['beforekeydown', 'beforekeydown'],
  ['beforekeyup', 'beforekeyup'],
  ['beforecellsave', 'beforecellsave'],
  ['celledit', 'celledit'],
  ['scrollview', 'scrollview'],
  ['ref', 'ref'],
  ['scrollvirtual', 'scrollvirtual'],
  ['scrollviewport', 'scrollviewport'],
  ['resizeviewport', 'resizeviewport'],
  ['scrollchange', 'scrollchange'],
  ['scrollviewportsilent', 'scrollviewportsilent'],
  ['html', 'html']
]);