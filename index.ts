import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import {setCulture} from '@syncfusion/ej2-base';

declare var require: any;
MultiSelect.Inject(CheckBoxSelection);

setCulture('fr');
// Load `German` culture to override spin buttons tooltip text
L10n.load({
    'fr': {
        'multi-select': {
            "noRecordsTemplate": "Aucun enregistrement trouvé",
            "actionFailureTemplate": "La demande a échoué",
            "overflowCountTemplate": "+${count} de plus ..",
            "selectAllText": "Tout sélectionner",
            "unSelectAllText": "Tout déselectionner",
            "totalCountTemplate": "${count} sélectionné"
           
        }
    }
});
// "totalCountTemplate": "${count} sélectionné"
var sportsData = [
    { "Id": "Game1", "Game": "Mederick hamon" },
    { "Id": "Game2", "Game": "Marine Bacher" },
    { "Id": "Game3", "Game": "Romuald Gacon" }
];
// // Initialize DropDownList component
// let listObj: DropDownList = new DropDownList({

// });
// listObj.appendTo('#games');
// Initialize DropDownList component
let listObj1: MultiSelect = new MultiSelect({
    dataSource: sportsData,
  //  locale: 'fr',
    // map the appropriate columns to fields property
    fields: { text: 'Game' },
    mode: 'CheckBox',
    // set the placeholder to MultiSelect input element
    placeholder: 'Choix utilisateurs',
    // set true for enable the selectAll support.
    showSelectAll: true,
    // width:"250px",
    // set true for enable the dropdown icon.
    showDropDownIcon: true,
    popupHeight: '350px',
    popupWidth: '350px',
    allowFiltering: false,
    // set the placeholder to MultiSelect filter input element
    filterBarPlaceholder: 'Recherche un utilisateur',
    enablePersistence: false,
    width:'183.323px'
});
listObj1.appendTo('#element');