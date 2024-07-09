const app = '*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:1rem;font-weight:400;line-height:1.5;margin:0;text-align:left}[tabindex="-1"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6,p{margin-bottom:0;margin-top:0}abbr[data-original-title],abbr[title]{border-bottom:0;cursor:help;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}address{font-style:normal;line-height:inherit;margin-bottom:1rem}dl,ol,ul{margin:0;padding:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{background-color:transparent;color:var(--blue-sky);text-decoration:none;-webkit-text-decoration-skip:objects;text-decoration-skip:objects}a:hover{text-decoration:none}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}pre{margin-bottom:1rem;margin-top:0;overflow:auto;overflow-style:scrollbar}figure{margin:0 0 1rem}img{border-style:none;vertical-align:middle}svg:not(:root){overflow:hidden}table{border-collapse:collapse}caption{caption-side:bottom;color:#6c757d;padding-bottom:.75rem;padding-top:.75rem;text-align:left}th{text-align:inherit}label{display:inline-block}button{border-radius:0}button:focus,input:focus,textarea:focus{outline:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,input{overflow:visible}button,select{cursor:pointer;text-transform:none}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox;-moz-appearance:listbox;appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{color:inherit;display:block;font-size:1.5rem;line-height:inherit;margin-bottom:.5rem;max-width:100%;padding:0;white-space:normal;width:100%}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;appearance:button;font:inherit}output{display:inline-block}summary{cursor:pointer;display:list-item}template{display:none}[hidden]{display:none!important}:root{--white:#fff;--black:#000;--gray-1:#0a0a0b;--gray-2:#1b1d1f;--gray-3:#222527;--gray-4:#272727;--gray-5:#2a2d30;--gray-6:#292c30;--gray-7:#343738;--gray-8:#474d54;--gray-9:#787878;--gray-10:grey;--gray-11:#939393;--gray-12:#afafaf;--gray-13:#c9c9c9;--gray-14:#e4e4e4;--gray-15:#f0f0f0;--gray-16:#f8f8f8;--gray-17:#f9f9f9;--orange-hovered:#f9b661;--orange-default:#f7971e;--orange-pressed:#dc800c;--green:#87ab49;--red:#c82a2a;--yellow:#f2c94c;--Inter:Inter,sans-serif;--Montserrat:Montserrat,sans-serif;--base-font-family:var(--Inter);--base-font-size:16px;--base-font-style:normal;--base-font-weight:400;--base-line-height:24px;--base-font-color:var(--gray-8);--base-bg-color:var(--white);--base-transition:0.25s ease-in-out;--header-height:60px}@media (min-width:768px){:root{--base-font-size:18px}}@media (min-width:992px){:root{--header-height:70px}}body{background-color:var(--base-bg-color);color:var(--base-font-color);font-family:var(--base-font-family);font-size:var(--base-font-size);font-style:var(--base-font-style);font-weight:var(--base-font-weight);line-height:var(--base-line-height)}body.no-scroll{overflow-y:hidden}img{height:auto;max-width:100%}.scalable,.scalable:hover{transform-origin:center;transition:transform .5s cubic-bezier(.2,3,.4,1) 0s}.scalable:hover{transform:scale(1.1)}h1{color:var(--gray-1);font-family:var(--Montserrat);font-size:28px;font-style:normal;font-weight:700;line-height:28px;text-transform:uppercase}@media (min-width:768px){h1{font-size:40px;line-height:46px}}h2{color:var(--gray-4);font-family:var(--Montserrat);font-size:24px;font-style:normal;font-weight:700;line-height:32px;text-transform:uppercase}@media (min-width:768px){h2{font-size:30px;line-height:38px}}h3{color:var(--gray-3);font-family:var(--Montserrat);font-size:20px;font-style:normal;font-weight:700;line-height:28px;text-transform:uppercase}@media (min-width:768px){h3{font-size:24px;line-height:32px}}h4{color:var(--gray-6);font-family:var(--Montserrat);font-size:18px;font-style:normal;font-weight:700;line-height:26px;text-transform:uppercase}@media (min-width:768px){h4{font-size:20px;line-height:28px}}.text-sm{font-size:16px;line-height:140%}.text-weight-500{font-weight:500}.text-weight-600{font-weight:600}.text-weight-700{font-weight:700}.text-montserrat{font-family:var(--Montserrat)}.text-capitalize{text-transform:capitalize}.color-orange{color:var(--orange-default)}.color-white{color:var(--white)}.icon-chevron{align-items:center;display:inline-flex;height:24px;justify-content:center;transition:var(--base-transition);width:24px}.icon-chevron:before{border-color:var(--white);border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;height:10px;left:0;position:relative;top:-2px;transform:rotate(45deg);width:10px}.icon-chevron--small:before{border-width:0 1px 1px 0;height:8px;width:8px}.icon-chevron--dark:before{border-color:var(--gray-4)}.icon-chevron--orange:before{border-color:var(--orange-default)}';
export {
  app as default
};
//# sourceMappingURL=entry-styles-1.mjs-DkVtWoyF.js.map
