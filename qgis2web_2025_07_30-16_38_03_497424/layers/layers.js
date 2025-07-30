var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_comunicazione1_1 = new ol.format.GeoJSON();
var features_comunicazione1_1 = format_comunicazione1_1.readFeatures(json_comunicazione1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunicazione1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunicazione1_1.addFeatures(features_comunicazione1_1);
var lyr_comunicazione1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunicazione1_1, 
                style: style_comunicazione1_1,
                popuplayertitle: 'comunicazione1',
                interactive: true,
                title: '<img src="styles/legend/comunicazione1_1.png" /> comunicazione1'
            });
var format_acqua5_2 = new ol.format.GeoJSON();
var features_acqua5_2 = format_acqua5_2.readFeatures(json_acqua5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_acqua5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_acqua5_2.addFeatures(features_acqua5_2);
var lyr_acqua5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_acqua5_2, 
                style: style_acqua5_2,
                popuplayertitle: 'acqua5',
                interactive: true,
    title: 'acqua5<br />\
    <img src="styles/legend/acqua5_2_0.png" /> 0<br />\
    <img src="styles/legend/acqua5_2_1.png" /> <br />' });
var format_curve_di_livello_3 = new ol.format.GeoJSON();
var features_curve_di_livello_3 = format_curve_di_livello_3.readFeatures(json_curve_di_livello_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_curve_di_livello_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_curve_di_livello_3.addFeatures(features_curve_di_livello_3);
var lyr_curve_di_livello_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_curve_di_livello_3, 
                style: style_curve_di_livello_3,
                popuplayertitle: 'curve_di_livello',
                interactive: true,
                title: '<img src="styles/legend/curve_di_livello_3.png" /> curve_di_livello'
            });
var format_Segnalazionicittadini_4 = new ol.format.GeoJSON();
var features_Segnalazionicittadini_4 = format_Segnalazionicittadini_4.readFeatures(json_Segnalazionicittadini_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segnalazionicittadini_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segnalazionicittadini_4.addFeatures(features_Segnalazionicittadini_4);
var lyr_Segnalazionicittadini_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Segnalazionicittadini_4, 
                style: style_Segnalazionicittadini_4,
                popuplayertitle: 'Segnalazioni cittadini',
                interactive: true,
                title: '<img src="styles/legend/Segnalazionicittadini_4.png" /> Segnalazioni cittadini'
            });
var format_Perimetro_5 = new ol.format.GeoJSON();
var features_Perimetro_5 = format_Perimetro_5.readFeatures(json_Perimetro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetro_5.addFeatures(features_Perimetro_5);
var lyr_Perimetro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetro_5, 
                style: style_Perimetro_5,
                popuplayertitle: 'Perimetro',
                interactive: true,
                title: '<img src="styles/legend/Perimetro_5.png" /> Perimetro'
            });
var group_Orografia = new ol.layer.Group({
                                layers: [lyr_curve_di_livello_3,],
                                fold: 'open',
                                title: 'Orografia'});
var group_Vegetazione = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vegetazione'});
var group_Morfologia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Morfologia'});
var group_Acqua = new ol.layer.Group({
                                layers: [lyr_acqua5_2,],
                                fold: 'open',
                                title: 'Acqua'});
var group_Edificato = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Edificato'});
var group_Comunicazione = new ol.layer.Group({
                                layers: [lyr_comunicazione1_1,],
                                fold: 'open',
                                title: 'Comunicazione'});

lyr_GoogleSatellite_0.setVisible(true);lyr_comunicazione1_1.setVisible(true);lyr_acqua5_2.setVisible(true);lyr_curve_di_livello_3.setVisible(true);lyr_Segnalazionicittadini_4.setVisible(true);lyr_Perimetro_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Comunicazione,group_Acqua,group_Orografia,lyr_Segnalazionicittadini_4,lyr_Perimetro_5];
lyr_comunicazione1_1.set('fieldAliases', {'ID': 'ID', 'FOGLIO': 'FOGLIO', 'CODICE': 'CODICE', 'DESCRIZION': 'DESCRIZION', 'TIPO': 'TIPO', 'PUNTI': 'PUNTI', 'IDENT': 'IDENT', 'BORDO': 'BORDO', 'ANNORILEV': 'ANNORILEV', 'FLAGSTATO': 'FLAGSTATO', 'TIPOSTRADA': 'TIPOSTRADA', 'CODICEIDNT': 'CODICEIDNT', 'TOPONIMO': 'TOPONIMO', 'CLASSLARGH': 'CLASSLARGH', 'STATO': 'STATO', 'SEDE': 'SEDE', 'TRATTO': 'TRATTO', 'TIPNODOINZ': 'TIPNODOINZ', 'TIPNODOFIN': 'TIPNODOFIN', });
lyr_acqua5_2.set('fieldAliases', {'ID': 'ID', 'FOGLIO': 'FOGLIO', 'CODICE': 'CODICE', 'DESCRIZION': 'DESCRIZION', 'TIPO': 'TIPO', 'PUNTI': 'PUNTI', 'IDENT': 'IDENT', 'BORDO': 'BORDO', 'ANNORILEV': 'ANNORILEV', 'FLAGSTATO': 'FLAGSTATO', 'TIPCORSO': 'TIPCORSO', 'CODICEIDNT': 'CODICEIDNT', 'TOPONIMO': 'TOPONIMO', 'MODALSCORR': 'MODALSCORR', 'MEZZERIA': 'MEZZERIA', 'TIPNODOINZ': 'TIPNODOINZ', 'TIPNODOFIN': 'TIPNODOFIN', });
lyr_curve_di_livello_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'foglio': 'foglio', 'codice': 'codice', 'descrizion': 'descrizion', 'tipo': 'tipo', 'punti': 'punti', 'ident': 'ident', 'bordo': 'bordo', 'annorilev': 'annorilev', 'flagstato': 'flagstato', 'quota': 'quota', 'st_length_': 'st_length_', 'Shape_Leng': 'Shape_Leng', });
lyr_Segnalazionicittadini_4.set('fieldAliases', {'id segnala': 'id segnala', 'nome segna': 'nome segna', 'tipo segna': 'tipo segna', 'data segna': 'data segna', 'coordinate': 'coordinate', 'foto': 'foto', 'via': 'via', });
lyr_Perimetro_5.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Foto': 'Foto', });
lyr_comunicazione1_1.set('fieldImages', {'ID': 'Range', 'FOGLIO': 'TextEdit', 'CODICE': 'TextEdit', 'DESCRIZION': 'TextEdit', 'TIPO': 'TextEdit', 'PUNTI': 'Range', 'IDENT': 'Range', 'BORDO': 'Range', 'ANNORILEV': 'Range', 'FLAGSTATO': 'TextEdit', 'TIPOSTRADA': 'TextEdit', 'CODICEIDNT': 'TextEdit', 'TOPONIMO': 'TextEdit', 'CLASSLARGH': 'TextEdit', 'STATO': 'TextEdit', 'SEDE': 'TextEdit', 'TRATTO': 'TextEdit', 'TIPNODOINZ': 'TextEdit', 'TIPNODOFIN': 'TextEdit', });
lyr_acqua5_2.set('fieldImages', {'ID': 'Range', 'FOGLIO': 'TextEdit', 'CODICE': 'TextEdit', 'DESCRIZION': 'TextEdit', 'TIPO': 'TextEdit', 'PUNTI': 'Range', 'IDENT': 'Range', 'BORDO': 'Range', 'ANNORILEV': 'Range', 'FLAGSTATO': 'TextEdit', 'TIPCORSO': 'TextEdit', 'CODICEIDNT': 'TextEdit', 'TOPONIMO': 'TextEdit', 'MODALSCORR': 'TextEdit', 'MEZZERIA': 'TextEdit', 'TIPNODOINZ': 'TextEdit', 'TIPNODOFIN': 'TextEdit', });
lyr_curve_di_livello_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'Range', 'foglio': 'TextEdit', 'codice': 'TextEdit', 'descrizion': 'TextEdit', 'tipo': 'TextEdit', 'punti': 'Range', 'ident': 'Range', 'bordo': 'Range', 'annorilev': 'Range', 'flagstato': 'TextEdit', 'quota': 'TextEdit', 'st_length_': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Segnalazionicittadini_4.set('fieldImages', {'id segnala': 'TextEdit', 'nome segna': 'TextEdit', 'tipo segna': 'TextEdit', 'data segna': 'DateTime', 'coordinate': 'TextEdit', 'foto': 'TextEdit', 'via': 'TextEdit', });
lyr_Perimetro_5.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_comunicazione1_1.set('fieldLabels', {'ID': 'header label - always visible', 'FOGLIO': 'header label - always visible', 'CODICE': 'no label', 'DESCRIZION': 'no label', 'TIPO': 'no label', 'PUNTI': 'no label', 'IDENT': 'no label', 'BORDO': 'no label', 'ANNORILEV': 'no label', 'FLAGSTATO': 'no label', 'TIPOSTRADA': 'no label', 'CODICEIDNT': 'no label', 'TOPONIMO': 'inline label - visible with data', 'CLASSLARGH': 'no label', 'STATO': 'no label', 'SEDE': 'no label', 'TRATTO': 'no label', 'TIPNODOINZ': 'no label', 'TIPNODOFIN': 'no label', });
lyr_acqua5_2.set('fieldLabels', {'ID': 'no label', 'FOGLIO': 'header label - visible with data', 'CODICE': 'header label - visible with data', 'DESCRIZION': 'no label', 'TIPO': 'no label', 'PUNTI': 'no label', 'IDENT': 'no label', 'BORDO': 'no label', 'ANNORILEV': 'no label', 'FLAGSTATO': 'no label', 'TIPCORSO': 'no label', 'CODICEIDNT': 'no label', 'TOPONIMO': 'inline label - visible with data', 'MODALSCORR': 'no label', 'MEZZERIA': 'no label', 'TIPNODOINZ': 'no label', 'TIPNODOFIN': 'no label', });
lyr_curve_di_livello_3.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'foglio': 'no label', 'codice': 'no label', 'descrizion': 'no label', 'tipo': 'no label', 'punti': 'no label', 'ident': 'no label', 'bordo': 'no label', 'annorilev': 'no label', 'flagstato': 'no label', 'quota': 'no label', 'st_length_': 'no label', 'Shape_Leng': 'no label', });
lyr_Segnalazionicittadini_4.set('fieldLabels', {'id segnala': 'inline label - always visible', 'nome segna': 'no label', 'tipo segna': 'no label', 'data segna': 'no label', 'coordinate': 'no label', 'foto': 'header label - always visible', 'via': 'no label', });
lyr_Perimetro_5.set('fieldLabels', {'id': 'header label - visible with data', 'Nome': 'header label - visible with data', 'Foto': 'header label - visible with data', });
lyr_Perimetro_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});