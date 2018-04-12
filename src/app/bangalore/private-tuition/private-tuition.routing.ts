import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
//import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {PrivateTuitionComponent} from './private-tuition.component';
import {PrivateTuitionInBangaloreComponent} from './private-tuition-in-bangalore/private-tuition-in-bangalore.component';
import { CommonTemplateComponent } from './common-template/common-template.component';

const routes: Routes =[
    {path: '',
    component: PrivateTuitionComponent,
    children: [
    { path: 'common-template', component: CommonTemplateComponent}, 
    
    //Subject Routing
    { path: 'private-tuition-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'maths-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'science-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'english-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'physics-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'social-science-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'hindi-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'chemistry-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'biology-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'accounting-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'history-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'geography-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },

    //State Board/CBSC/ICSC Board Routing
    { path: 'cbse-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'icse-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'state-board-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'igcse-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    { path: 'karanaka-board-private-tuitions-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    
    //Grade Or class Routing
    {path: 'nursery-kg-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-6-7-8-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-1-2-3-4-5-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-9-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-10-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-11-science-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-11-commerce-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-11-arts-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-12-science-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-12-arts-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },
    {path: 'class-12-commerce-private-tuition-tutors-in-bangalore', component: PrivateTuitionInBangaloreComponent },

    //Area Or Location Based Routing
    {path: 'a-f-station-yelahanka-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'adugodi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'agara-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'agram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'air-force-hospital-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'amruthahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'anandnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'anekal-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'anekalbazar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'arabic-college-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'aranya-bhavan-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'ashoknagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'attibele-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'attur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'austin-town-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'avalahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'avani-sringeri-mutt-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'avenue-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'b-sk-ii-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bsf-campus-yelahanka-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bagalgunte-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bagalur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'balepete-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'banashankari-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'banashankari-iii-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'banaswadi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bandikodigehalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bangalore-air-port-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bangalore-bazaar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bangalore-city-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bangalore-corporation-building-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bangalore-dist-offices-bldg-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bangalore-fort-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bangalore-sub-fgn-post-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bangalore.-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bannerghatta-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bannerghatta-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bapujinagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'basavanagudi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'basavaraja-market-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'basaveshwaranagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'basaveswaranagar-ii-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bellandur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'benson-town-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bestamaranahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bettahalsur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bhashyam-circle-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bhattarahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bidaraguppe-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bidrahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bnagalore-viswavidalaya-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'bommanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'brigade-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'byatarayanapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'c.v.raman-nagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'cmp-centre-and-school-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'crpf-campus-yelahanka-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'cahmrajendrapet-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chamrajpet-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chamrajpet-bazar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chandra-lay-out-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chickpet-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chikkabettahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chikkajala-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chikkalasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chikkanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'chunchanakuppe-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'cubban-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'dasarahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'deepanjalinagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'devanagundi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'devarjeevanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'devasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'dharmaram-college-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'doddagubbi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'doddajala-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'doddakallasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'doddanekkundi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'domlur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'dommasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'doorvaninagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'dr.-ambedkar-veedhi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'electronics-city-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'fraser-town-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'g.k.v.k.-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'gaviopuram-extension-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'gaviopuram-guttanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'gayathrinagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'girinagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'goraguntepalya-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'goripalya-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'governmemnt-electric-factory-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'govindapalya-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'gunjur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'h-m-t-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'h.a.-farm-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'h.a.l-ii-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'h.k.p.-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hsr-layout-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hampinagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'handenahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'harogadde-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hebbal-kempapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hennagara-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'highcourt-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hongasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hoodi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'horamavu-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hosakerehalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hosur-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hulimangala-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hulimavu-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hulsur-bazaar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'hunasamaranahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'isro-anthariksha-bhavan-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'immedihalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'indalavadi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'indiranagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'indiranagar-com.-complex-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'industrial-estate-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'ittamadu-layout-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'j-p-nagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'j.c.nagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jakkur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jalahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jalahalli-east-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jalahalli-village-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jalahalli-west-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jalavayuvihar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jayanagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jayanagar-west-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jayangar-east-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jayangar-iii-block-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jeevanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jeevanbhimanagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jigani-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'jp-nagar-iii-phase-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'k-h-b-colony-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'k.-g.-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'k.p.west-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kacharakanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kadabagere-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kadugodi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kalkunte-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kalyanagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kamagondanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kamakshipalya-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kannamangala-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kannur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kanteeravanagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kathriguppe-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kenchanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kendriya-sadan-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kendriya-vihar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kodigehalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'konanakunte-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'koramangala-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'koramangala-i-block-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'koramangala-vi-bk-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kothanur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'krishnarajapuram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'krishnarajapuram-r-s-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kugur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kumaraswamy-layout-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kumbalgodu-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'kundalahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'lalbagh-west-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'legislators-home-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'lingarajapuram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'm-s-r-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'madhavan-park-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'madivala-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'magadi-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mahadevapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mahalakshmipuram-layout-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mahatma-gandhi-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'malkand-lines-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mallathahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'malleswaram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'malleswaram-west-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mandalay-lines-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'marathahalli-colony-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'marsur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'maruthi-sevanagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mathikere-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mavalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mayasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'medihalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'medimallasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mico-layout-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'milk-colony-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mount-st-joseph-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'msrit-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'mundur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'museum-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'muthanallur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'muthusandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'nal-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'naduvathi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'nagarbhavi-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'nagasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'nagavara-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'nandinilayout-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'narasimharaja-colony-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'narasimjharaja-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'narayan-pillai-street-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'nayandahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'neralur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'new-tharaggupet-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'new-thippasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'okalipuram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'p&t-col.-kavalbyrasandra-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'padmanabhnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'palace-guttahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'panathur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'pasmpamahakavi-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'peenya-i-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'peenya-ii-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'peenya-small-industries-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'r-t-nagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'r.m.v.-extension-ii-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'rajajinagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'rajajinagar-i-block-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'rajajinagar-ivth-block-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'rajanakunte-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'rajarajeshwarinagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'rajbhavan-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'ramachandrapuram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'ramagondanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'ramakrishna-hegde-nagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'ramamurthy-nagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'rameshnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'richmond-town-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'rv-niketan-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'sadashivanagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'sahakaranagar-p.o-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'samandur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'samethanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'sampangiramnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'sarjapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'science-institute-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'seshadripuram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'shankarpura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'shanthinagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'sidihoskote-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'singanayakanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'sivan-chetty-gardens-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'someswarapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'sri-jayachamarajendra-road-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'srirampuram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'st.-johns-medical-college-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'st.-thomas-town-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'state-bank-of-mysore-colony-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'subhashnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'subramanyapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'swimming-pool-extn-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'tarahunise-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'tavarekere-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'taverekere-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'thambuchetty-palya-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'thammanayakanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'tilaknagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'training-command-iaf-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'tyagrajnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'ullalu-upanagara-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vanakanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vartur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vasanthnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'venkatarangapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'venkateshapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vidhana-soudha-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vidyanagara-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vidyaranyapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vijayanagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vijayanagar-east-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vikramnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vimapura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'virgonagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'visveswarapuram-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'viswaneedam-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vittalnagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'viveknagar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'vyalikaval-extn-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'wheel-and-axle-plant-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'whitefield-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'wilson-garden-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'yadavanahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'yediyur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'yelachenahalli-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'yelahanka-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'yelahanka-satellite-town-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'yemalur-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'yeshwanthpur-bazar-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'yeswanthpura-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'btm-layout-1st-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },
    {path: 'btm-layout-2nd-stage-private-tuition-tutors', component: PrivateTuitionInBangaloreComponent },    



    { path: '', redirectTo: 'bangalore', pathMatch: 'full' },
    {path: '**', redirectTo: 'bangalore' }
 ] 
}
];

export const routing = RouterModule.forChild(routes);