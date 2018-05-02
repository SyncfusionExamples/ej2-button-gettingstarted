import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
// Initialize button component.
let button: Button = new Button();

// Render initialized button.
button.appendTo('#element');


//Primary Button - Used to represent a primary action.
button = new Button({ cssClass: `e-primary`}, '#primarybtn');
//Success Button - Used to represent a positive action.
button = new Button({ cssClass: `e-success`}, '#successbtn');
//Info Button - Used to represent an informative action.
button = new Button({ cssClass: `e-info`}, '#infobtn');
//Warning Button - Used to represent an action with caution.
button = new Button({ cssClass: `e-warning`}, '#warningbtn');
//Danger Button - Used to represent a negative action.
button = new Button({ cssClass: `e-danger`}, '#dangerbtn');
//Link Button - Changes the appearance of the Button like a hyperlink.
button = new Button({ cssClass: `e-link`}, '#linkbtn');


button = new Button({iconCss: 'e-icons e-open-icon'}, '#iconbutton');

button = new Button({iconCss: 'e-icons e-play-icon', iconPosition: 'Right'}, '#iconleftbtn');

button = new Button({iconCss: 'e-icons e-stop-icon'}, '#iconrightbtn');


button = new Button({cssClass:'e-outline e-primary', content: 'outline'}, '#outlinebtn');

button = new Button({cssClass:'e-round e-primary', iconCss: 'e-icons e-add'}, '#roundbtn');

button = new Button({cssClass: `e-block`});
button.appendTo('#blockbtn');

button = new Button({ isPrimary: true, cssClass: `e-block` });
button.appendTo('#primaryblockbtn');

button = new Button({ cssClass: `e-small`}, '#smallbtn');

button = new Button();
button.appendTo('#normalbtn');
