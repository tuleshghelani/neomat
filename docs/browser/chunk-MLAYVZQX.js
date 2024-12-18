import{a as D,b as x,c as G,d as g,e as R,f as A,i as U,k as Y,l as B,m as L,n as $,o as W,q as J,s as H}from"./chunk-24P5TL2F.js";import{A as F,C as a,D as b,G as d,I as l,K as p,L as o,M as n,N as s,O as S,P as I,Q as y,R as C,S as u,X as r,Y as q,_ as k,a as O,b as M,e as w,ea as T,la as N,m as h,ma as z,na as j,p as E,pa as V,q as v,t as _,u as f,xa as P}from"./chunk-NZIPG7CP.js";var ee=t=>({"last-item":t});function te(t,m){if(t&1){let e=y();S(0),o(1,"div",10)(2,"div",11),s(3,"img",12),n(),o(4,"div",13)(5,"h3",14),r(6),n(),o(7,"button",15),C("click",function(){let c=_(e).$implicit,Z=u();return f(Z.openEnquiryForm(c))}),r(8," Enquiry Now "),n()()(),I()}if(t&2){let e=m.$implicit,i=m.index,c=u();a(),l("ngClass",T(4,ee,i===c.catalogueItems.length-1&&c.catalogueItems.length%3===1)),a(2),l("src",e.image,F)("alt",e.title),a(3),q(e.title)}}function ne(t,m){t&1&&(o(0,"div",41),r(1," Please enter your name "),n())}function oe(t,m){t&1&&(o(0,"div",41),r(1," Please enter a valid email address "),n())}function ie(t,m){if(t&1&&(o(0,"option",42),r(1),n()),t&2){let e=m.$implicit;l("value",e.dialCode),a(),k(" ",e.name," (",e.dialCode,") ")}}function re(t,m){t&1&&(o(0,"div",41),r(1," Please select your country "),n())}function ae(t,m){t&1&&(o(0,"div",41),r(1," Please enter a valid mobile number "),n())}function le(t,m){t&1&&(o(0,"div",41),r(1," Please enter a valid company name "),n())}function ce(t,m){t&1&&(o(0,"div",41),r(1," Please enter a valid designation "),n())}function me(t,m){t&1&&(o(0,"div",41),r(1," Please enter your address "),n())}function de(t,m){t&1&&(o(0,"span"),r(1,"Submit Enquiry"),n())}function se(t,m){t&1&&(o(0,"span"),r(1,"Submitting..."),n())}function ge(t,m){if(t&1){let e=y();o(0,"div",16),C("click",function(){_(e);let c=u();return f(c.closeEnquiryForm())}),o(1,"div",17),C("click",function(c){return _(e),f(c.stopPropagation())}),o(2,"div",18)(3,"h2"),r(4,"Catalogue"),n(),o(5,"button",19),C("click",function(){_(e);let c=u();return f(c.closeEnquiryForm())}),r(6,"\xD7"),n()(),o(7,"form",20),C("ngSubmit",function(){_(e);let c=u();return f(c.submitEnquiry())}),o(8,"div",21)(9,"label",22),r(10,"Full Name"),n(),s(11,"input",23),d(12,ne,2,0,"div",24),n(),o(13,"div",21)(14,"label",25),r(15,"Email Address"),n(),s(16,"input",26),d(17,oe,2,0,"div",24),n(),o(18,"div",21)(19,"label",27),r(20,"Country"),n(),o(21,"select",28)(22,"option",29),r(23,"Select your country"),n(),d(24,ie,2,3,"option",30),n(),d(25,re,2,0,"div",24),n(),o(26,"div",21)(27,"label",31),r(28,"Mobile Number"),n(),s(29,"input",32),d(30,ae,2,0,"div",24),n(),o(31,"div",21)(32,"label",31),r(33,"Comany Name"),n(),s(34,"input",33),d(35,le,2,0,"div",24),n(),o(36,"div",21)(37,"label",34),r(38,"Designation"),n(),s(39,"input",35),d(40,ce,2,0,"div",24),n(),o(41,"div",21)(42,"label",36),r(43,"Address"),n(),s(44,"textarea",37),d(45,me,2,0,"div",24),n(),o(46,"div",38)(47,"button",39),d(48,de,2,0,"span",40)(49,se,2,0,"span",40),n()()()()()}if(t&2){let e=u();a(7),l("formGroup",e.enquiryForm),a(4),p("error",e.isFieldInvalid("name")),a(),l("ngIf",e.isFieldInvalid("name")),a(4),p("error",e.isFieldInvalid("email")),a(),l("ngIf",e.isFieldInvalid("email")),a(4),p("error",e.isFieldInvalid("country")),a(3),l("ngForOf",e.countries),a(),l("ngIf",e.isFieldInvalid("country")),a(4),p("error",e.isFieldInvalid("mobilenumber")),a(),l("ngIf",e.isFieldInvalid("mobilenumber")),a(4),p("error",e.isFieldInvalid("company_name")),a(),l("ngIf",e.isFieldInvalid("company_name")),a(4),p("error",e.isFieldInvalid("designation")),a(),l("ngIf",e.isFieldInvalid("designation")),a(4),p("error",e.isFieldInvalid("address")),a(),l("ngIf",e.isFieldInvalid("address")),a(2),l("disabled",e.enquiryForm.invalid||e.isSubmitting),a(),l("ngIf",!e.isSubmitting),a(),l("ngIf",e.isSubmitting)}}var Q=(()=>{class t{constructor(e,i){this.fb=e,this.countryService=i,this.showEnquiryForm=!1,this.isSubmitting=!1,this.selectedItem=null,this.countries=[],this.catalogueItems=[{id:1,title:"I/C Casting Fittings",description:"Cutting-edge materials for future-ready construction",image:"src/assets/catelogue/IC_CASTING_FITTINGS.jpg",category:"Innovation"},{id:2,title:"But Weld End Fittings",description:"Cutting-edge materials for future-ready construction",image:"assets/catelogue/BUT WELD END FITTINGS.jpg",category:"Innovation"},{id:3,title:"Forged Fittings",description:"Eco-friendly options for conscious building",image:"assets/catelogue/FORGED FITTINGS..jpg",category:"Sustainable"},{id:4,title:"Flanges",description:"Expertly curated designer materials",image:"assets/catelogue/Flanges _Detail Catalog.jpg",category:"Designer"},{id:5,title:"VCO Fittings",description:"Discover our exclusive range of premium materials",image:"assets/catelogue/VCO FETTING.jpg",category:"Premium"},{id:6,title:"VCR Fitting",description:"Contemporary solutions for modern spaces",image:"assets/catelogue/VCR FETTING.jpg",category:"Modern"},{id:7,title:"Tube Fittings",description:"Timeless elegance for every project",image:"assets/catelogue/TUBE FETTINGS.jpg",category:"Classic"}],this.countries=this.countryService.getCountries(),this.enquiryForm=this.fb.group({name:["",[g.required,g.minLength(3)]],email:["",[g.required,g.email]],country:["",[g.required]],mobilenumber:["",[g.required]],address:["",[g.required,g.minLength(10)]],company_name:[null],designation:[null]})}ngOnInit(){}openEnquiryForm(e){this.selectedItem=e,this.showEnquiryForm=!0,document.body.style.overflow="hidden"}closeEnquiryForm(){this.showEnquiryForm=!1,this.enquiryForm.reset(),this.selectedItem=null,document.body.style.overflow="auto"}isFieldInvalid(e){let i=this.enquiryForm.get(e);return i?i.invalid&&(i.dirty||i.touched):!1}submitEnquiry(){return w(this,null,function*(){if(this.enquiryForm.valid&&!this.isSubmitting){this.isSubmitting=!0;try{let e=`${D.baseURL}/api/enquiries/`,i=M(O({},this.enquiryForm.value),{productId:this.selectedItem?.id,productName:this.selectedItem?.title});if((yield fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).status===201)alert("Enquiry submitted successfully!"),this.closeEnquiryForm();else throw new Error("Failed to submit enquiry")}catch(e){console.error("Error submitting form:",e),alert("Failed to submit enquiry. Please try again.")}finally{this.isSubmitting=!1}}else Object.keys(this.enquiryForm.controls).forEach(e=>{let i=this.enquiryForm.get(e);i&&i.markAsTouched()})})}static{this.\u0275fac=function(i){return new(i||t)(b(J),b(x))}}static{this.\u0275cmp=E({type:t,selectors:[["app-catelogue"]],decls:17,vars:2,consts:[[1,"catalogue-section"],[1,"hero-banner"],[1,"hero-content"],[1,"container","mx-auto","px-4","py-12"],[1,"text-center","mb-12"],[1,"text-4xl","font-bold","text-primary","mb-4"],[1,"text-lg","text-gray-600"],[1,"catalogue-grid"],[4,"ngFor","ngForOf"],["class","popup-overlay",3,"click",4,"ngIf"],[1,"catalogue-card",3,"ngClass"],[1,"relative","pb-[75%]","overflow-hidden"],["loading","lazy",1,"absolute","inset-0","w-full","h-full","object-cover",3,"src","alt"],[1,"p-6"],[1,"text-xl","font-bold","mt-2","mb-3"],[1,"mt-4","bg-primary-color","text-white","px-6","py-2","rounded-full","hover:bg-primary-color-light","transition-colors","duration-300",3,"click"],[1,"popup-overlay",3,"click"],[1,"popup-content",3,"click"],[1,"popup-header"],[1,"close-btn",3,"click"],[1,"enquiry-form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Enter your full name"],["class","error-message",4,"ngIf"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Enter your email"],["for","country"],["id","country","formControlName","country",1,"country-select"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","mobile"],["type","tel","id","mobilenumber","formControlName","mobilenumber","placeholder","Enter your mobile number"],["type","text","id","company_name","formControlName","company_name","placeholder","Enter your company name"],["for","designation"],["type","text","id","designation","formControlName","designation","placeholder","Enter your designation"],["for","address"],["id","address","formControlName","address","placeholder","Enter your address","rows","3"],[1,"form-actions"],["type","submit",1,"submit-btn",3,"disabled"],[4,"ngIf"],[1,"error-message"],[3,"value"]],template:function(i,c){i&1&&(o(0,"section",0),s(1,"br"),o(2,"div",1)(3,"div",2)(4,"h1"),r(5,"Catalogue"),n(),o(6,"p"),r(7,"Discover Our Premium Range of Pipe And Tube Fittings"),n()()(),o(8,"div",3)(9,"div",4)(10,"h1",5),r(11,"Our Premium Catalogue"),n(),o(12,"p",6),r(13,"Discover our extensive range of high-quality pipe and tube fittings"),n()(),o(14,"div",7),d(15,te,9,6,"ng-container",8),n()()(),d(16,ge,50,26,"div",9)),i&2&&(a(15),l("ngForOf",c.catalogueItems),a(),l("ngIf",c.showEnquiryForm))},dependencies:[N,z,j,U,$,W,G,L,R,A,Y,B],styles:[`.catalogue-section[_ngcontent-%COMP%]{padding:2rem 0;min-height:100vh;width:100%}.hero-banner[_ngcontent-%COMP%]{position:relative;height:300px;background:linear-gradient(135deg,var(--primary-color),var(--primary-color-light));display:flex;align-items:center;justify-content:center;text-align:center;padding:2rem;margin-bottom:3rem}.hero-banner[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;right:0;height:50px;background:var(--white-color);clip-path:polygon(0 100%,100% 100%,100% 0)}.hero-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{max-width:800px;color:var(--white-color);z-index:1}.hero-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5rem;font-weight:700;margin-bottom:1rem;font-family:var(--font-primary);text-shadow:2px 2px 4px rgba(0,0,0,.1)}@media (max-width: 768px){.hero-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem}}.hero-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.25rem;font-family:var(--font-secondary);opacity:.9}@media (max-width: 768px){.hero-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}.container[_ngcontent-%COMP%]{width:auto;max-width:1280px;margin:0 auto;padding:0 1.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2rem}@media (max-width: 1024px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr));gap:1.5rem}}@media (max-width: 640px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr);gap:1.5rem}}.catalogue-card[_ngcontent-%COMP%]{background:var(--white-color);border-radius:12px;overflow:hidden;box-shadow:0 4px 6px var(--shadow-dark);transition:transform .3s ease,box-shadow .3s ease;height:100%;display:flex;flex-direction:column}.catalogue-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 15px var(--shadow-dark)}.catalogue-card[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:75%;overflow:hidden}.catalogue-card[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;transition:transform .5s ease}.catalogue-card[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.catalogue-card[_ngcontent-%COMP%]   .p-6[_ngcontent-%COMP%]{padding:1.5rem;flex:1;display:flex;flex-direction:column}.catalogue-card[_ngcontent-%COMP%]   .text-primary-color[_ngcontent-%COMP%]{color:var(--primary-color);font-size:.875rem;font-weight:600;margin-bottom:.5rem}.catalogue-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;margin-bottom:.75rem;color:var(--text-color)}.catalogue-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--accent-color);margin-bottom:1.25rem;flex-grow:1;line-height:1.5}.catalogue-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--primary-color);color:var(--white-color);padding:.75rem 1.5rem;border-radius:9999px;font-weight:500;transition:all .3s ease;width:fit-content;border:none;cursor:pointer}.catalogue-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--primary-color-light);transform:translateY(-2px)}.text-center[_ngcontent-%COMP%]{text-align:center}.text-4xl[_ngcontent-%COMP%]{font-size:2.25rem;font-weight:700;color:var(--primary-color);margin-bottom:1rem}@media (max-width: 640px){.text-4xl[_ngcontent-%COMP%]{font-size:1.875rem}}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--accent-color)}@media (max-width: 640px){.text-lg[_ngcontent-%COMP%]{font-size:1rem}}.mb-12[_ngcontent-%COMP%]{margin-bottom:3rem}@media (max-width: 640px){.mb-12[_ngcontent-%COMP%]{margin-bottom:2rem}}.popup-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1001;overflow-y:auto;padding:20px}.popup-content[_ngcontent-%COMP%]{background:var(--white-color);border-radius:12px;width:100%;max-width:600px;max-height:90vh;display:flex;flex-direction:column;position:relative;animation:_ngcontent-%COMP%_slideIn .3s ease}.popup-header[_ngcontent-%COMP%]{padding:1.5rem;border-bottom:1px solid var(--border-color);position:sticky;top:0;background:var(--white-color);border-radius:12px 12px 0 0;z-index:1;display:flex;justify-content:space-between;align-items:center}.popup-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:var(--text-color);margin:0}.popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{background:none;border:none;font-size:1.5rem;color:var(--accent-color);cursor:pointer;padding:.5rem;transition:color .3s ease}.popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover{color:var(--text-color)}.enquiry-form[_ngcontent-%COMP%]{padding:1.5rem;overflow-y:auto;max-height:calc(90vh - 80px);scrollbar-width:thin;scrollbar-color:var(--primary-color) var(--background-color)}.enquiry-form[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.enquiry-form[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--background-color);border-radius:4px}.enquiry-form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:4px}.enquiry-form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--primary-color-light)}.enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:1.25rem}.enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:.875rem;font-weight:500;color:var(--text-color);margin-bottom:.5rem}.enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:90%;padding:.75rem 1rem;border:1px solid var(--border-color);border-radius:8px;font-size:1rem;transition:border-color .3s ease,box-shadow .3s ease;background-color:var(--white-color)}.enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-color);box-shadow:0 0 0 3px var(--primary-color-light)}.enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], .enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%]{border-color:#dc3545}.enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:var(--accent-color)}.enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical;min-height:100px}.enquiry-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#dc3545;font-size:.75rem;margin-top:.25rem}.form-actions[_ngcontent-%COMP%]{margin-top:2rem;text-align:center}.form-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:var(--primary-color);color:var(--white-color);padding:.75rem 2rem;border-radius:9999px;font-weight:500;border:none;cursor:pointer;transition:all .3s ease;min-width:200px}.form-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--primary-color-light);transform:translateY(-2px)}.form-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:disabled{opacity:.7;cursor:not-allowed}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 640px){.popup-content[_ngcontent-%COMP%]{margin:0;height:100vh;max-height:100vh;border-radius:0}.popup-header[_ngcontent-%COMP%]{border-radius:0}.enquiry-form[_ngcontent-%COMP%]{max-height:calc(100vh - 70px)}}.enquiry-table-section[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;padding:.5rem;margin-bottom:1rem;border:1px solid var(--primary-color);border-radius:4px;font-size:1rem;box-shadow:0 2px 4px #0000001a}.enquiry-table-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:2rem}.enquiry-table-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .enquiry-table-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;text-align:left;border-bottom:1px solid #ddd}.enquiry-table-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--primary-color);color:var(--white-color)}.enquiry-table-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}@media (max-width: 768px){.enquiry-table-section[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.875rem}.enquiry-table-section[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .enquiry-table-section[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.5rem}}.country-select[_ngcontent-%COMP%]{width:90%;padding:.75rem 1rem;border:1px solid var(--border-color);border-radius:8px;font-size:1rem;transition:border-color .3s ease,box-shadow .3s ease;background-color:var(--white-color);cursor:pointer;appearance:none;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right 1rem center;background-size:1em}.country-select[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-color);box-shadow:0 0 0 3px var(--primary-color-light)}.country-select.error[_ngcontent-%COMP%]{border-color:#dc3545}.country-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{padding:.5rem}.catalogue-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;padding:1rem}@media (min-width: 1024px){.catalogue-grid[_ngcontent-%COMP%]   .last-item[_ngcontent-%COMP%]:last-child:nth-child(3n+1){grid-column:2}}@media (max-width: 1024px){.catalogue-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:1.5rem}.catalogue-grid[_ngcontent-%COMP%]   .last-item[_ngcontent-%COMP%]:last-child:nth-child(odd){grid-column:1/-1;max-width:400px;margin:0 auto}}@media (max-width: 640px){.catalogue-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1.5rem;max-width:400px;margin:0 auto}}.catalogue-card[_ngcontent-%COMP%]{width:100%;background:var(--white-color);border-radius:12px;overflow:hidden;box-shadow:8px 8px 16px var(--shadow-dark),-8px -8px 16px var(--shadow-light);transition:transform .3s ease}.catalogue-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}`]})}}return t})();var pe=[{path:"",component:Q}],X=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=v({type:t})}static{this.\u0275inj=h({imports:[P.forChild(pe),P]})}}return t})();var Ie=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=v({type:t})}static{this.\u0275inj=h({providers:[x],imports:[V,X,H]})}}return t})();export{Ie as CatelogueModule};
