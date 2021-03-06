import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
//import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {PrivateTutorComponent} from './private-tutor.component';
import {PrivateTutorInBangaloreComponent} from './private-tutor-in-bangalore/private-tutor-in-bangalore.component';
import { CommonTemplateComponent } from './common-template/common-template.component';

const routes: Routes =[
    {path: '',
    component: PrivateTutorComponent,
    children: [
    { path: 'common-template', component: CommonTemplateComponent}, 
    
    //Subject Routing
    { path: 'private-tutor-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'maths-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'science-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'english-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'physics-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'social-science-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'hindi-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'chemistry-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'biology-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'accounting-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'history-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'geography-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },

    //State Board/CBSC/ICSC Board Routing
    { path: 'cbse-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'icse-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'state-board-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'igcse-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    { path: 'karanaka-board-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    
    //Grade Or class Routing
    {path: 'nursery-kg-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-6-7-8-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-1-2-3-4-5-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-9-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-10-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-11-science-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-11-commerce-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-11-arts-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-12-science-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-12-arts-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },
    {path: 'class-12-commerce-private-tutors-in-bangalore', component: PrivateTutorInBangaloreComponent },

    //Area Or Location Based Routing
    {path: 'a-f-station-yelahanka-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'adugodi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'agara-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'agram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'air-force-hospital-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'amruthahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'anandnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'anekal-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'anekalbazar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'arabic-college-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'aranya-bhavan-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'ashoknagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'attibele-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'attur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'austin-town-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'avalahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'avani-sringeri-mutt-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'avenue-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'b-sk-ii-stage-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bsf-campus-yelahanka-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bagalgunte-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bagalur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'balepete-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'banashankari-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'banashankari-iii-stage-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'banaswadi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bandikodigehalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bangalore-air-port-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bangalore-bazaar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bangalore-city-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bangalore-corporation-building-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bangalore-dist-offices-bldg-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bangalore-fort-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bangalore-sub-fgn-post-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bangalore.-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bannerghatta-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bannerghatta-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bapujinagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'basavanagudi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'basavaraja-market-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'basaveshwaranagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'basaveswaranagar-ii-stage-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bellandur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'benson-town-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bestamaranahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bettahalsur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bhashyam-circle-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bhattarahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bidaraguppe-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bidrahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bnagalore-viswavidalaya-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'bommanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'brigade-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'byatarayanapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'c.v.raman-nagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'cmp-centre-and-school-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'crpf-campus-yelahanka-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'cahmrajendrapet-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chamrajpet-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chamrajpet-bazar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chandra-lay-out-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chickpet-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chikkabettahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chikkajala-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chikkalasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chikkanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'chunchanakuppe-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'cubban-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'dasarahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'deepanjalinagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'devanagundi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'devarjeevanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'devasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'dharmaram-college-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'doddagubbi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'doddajala-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'doddakallasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'doddanekkundi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'domlur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'dommasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'doorvaninagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'dr.-ambedkar-veedhi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'electronics-city-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'fraser-town-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'g.k.v.k.-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'gaviopuram-extension-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'gaviopuram-guttanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'gayathrinagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'girinagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'goraguntepalya-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'goripalya-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'governmemnt-electric-factory-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'govindapalya-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'gunjur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'h-m-t-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'h.a.-farm-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'h.a.l-ii-stage-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'h.k.p.-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hsr-layout-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hampinagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'handenahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'harogadde-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hebbal-kempapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hennagara-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'highcourt-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hongasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hoodi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'horamavu-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hosakerehalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hosur-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hulimangala-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hulimavu-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hulsur-bazaar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'hunasamaranahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'isro-anthariksha-bhavan-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'immedihalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'indalavadi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'indiranagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'indiranagar-com.-complex-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'industrial-estate-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'ittamadu-layout-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'j-p-nagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'j.c.nagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jakkur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jalahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jalahalli-east-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jalahalli-village-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jalahalli-west-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jalavayuvihar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jayanagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jayanagar-west-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jayangar-east-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jayangar-iii-block-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jeevanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jeevanbhimanagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jigani-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'jp-nagar-iii-phase-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'k-h-b-colony-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'k.-g.-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'k.p.west-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kacharakanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kadabagere-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kadugodi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kalkunte-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kalyanagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kamagondanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kamakshipalya-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kannamangala-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kannur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kanteeravanagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kathriguppe-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kenchanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kendriya-sadan-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kendriya-vihar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kodigehalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'konanakunte-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'koramangala-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'koramangala-i-block-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'koramangala-vi-bk-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kothanur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'krishnarajapuram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'krishnarajapuram-r-s-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kugur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kumaraswamy-layout-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kumbalgodu-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'kundalahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'lalbagh-west-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'legislators-home-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'lingarajapuram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'm-s-r-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'madhavan-park-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'madivala-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'magadi-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mahadevapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mahalakshmipuram-layout-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mahatma-gandhi-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'malkand-lines-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mallathahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'malleswaram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'malleswaram-west-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mandalay-lines-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'marathahalli-colony-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'marsur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'maruthi-sevanagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mathikere-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mavalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mayasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'medihalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'medimallasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mico-layout-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'milk-colony-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mount-st-joseph-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'msrit-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'mundur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'museum-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'muthanallur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'muthusandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'nal-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'naduvathi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'nagarbhavi-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'nagasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'nagavara-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'nandinilayout-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'narasimharaja-colony-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'narasimjharaja-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'narayan-pillai-street-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'nayandahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'neralur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'new-tharaggupet-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'new-thippasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'okalipuram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'p&t-col.-kavalbyrasandra-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'padmanabhnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'palace-guttahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'panathur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'pasmpamahakavi-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'peenya-i-stage-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'peenya-ii-stage-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'peenya-small-industries-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'r-t-nagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'r.m.v.-extension-ii-stage-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'rajajinagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'rajajinagar-i-block-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'rajajinagar-ivth-block-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'rajanakunte-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'rajarajeshwarinagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'rajbhavan-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'ramachandrapuram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'ramagondanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'ramakrishna-hegde-nagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'ramamurthy-nagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'rameshnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'richmond-town-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'rv-niketan-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'sadashivanagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'sahakaranagar-p.o-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'samandur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'samethanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'sampangiramnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'sarjapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'science-institute-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'seshadripuram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'shankarpura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'shanthinagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'sidihoskote-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'singanayakanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'sivan-chetty-gardens-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'someswarapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'sri-jayachamarajendra-road-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'srirampuram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'st.-johns-medical-college-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'st.-thomas-town-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'state-bank-of-mysore-colony-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'subhashnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'subramanyapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'swimming-pool-extn-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'tarahunise-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'tavarekere-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'taverekere-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'thambuchetty-palya-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'thammanayakanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'tilaknagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'training-command-iaf-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'tyagrajnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'ullalu-upanagara-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vanakanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vartur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vasanthnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'venkatarangapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'venkateshapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vidhana-soudha-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vidyanagara-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vidyaranyapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vijayanagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vijayanagar-east-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vikramnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vimapura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'virgonagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'visveswarapuram-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'viswaneedam-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vittalnagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'viveknagar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'vyalikaval-extn-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'wheel-and-axle-plant-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'whitefield-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'wilson-garden-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'yadavanahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'yediyur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'yelachenahalli-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'yelahanka-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'yelahanka-satellite-town-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'yemalur-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'yeshwanthpur-bazar-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'yeswanthpura-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'btm-layout-1st-stage-private-tutors', component: PrivateTutorInBangaloreComponent },
    {path: 'btm-layout-2nd-stage-private-tutors', component: PrivateTutorInBangaloreComponent },    



    { path: '', redirectTo: 'private-tutor-in-bangalore', pathMatch: 'full' },
    {path: '**', redirectTo: 'private-tutor-in-bangalore' }
 ] 
}
];

export const routing = RouterModule.forChild(routes);