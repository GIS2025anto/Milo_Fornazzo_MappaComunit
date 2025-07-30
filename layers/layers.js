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
var format_Segnalazionicittadini_3 = new ol.format.GeoJSON();
var features_Segnalazionicittadini_3 = format_Segnalazionicittadini_3.readFeatures(json_Segnalazionicittadini_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segnalazionicittadini_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segnalazionicittadini_3.addFeatures(features_Segnalazionicittadini_3);
var lyr_Segnalazionicittadini_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Segnalazionicittadini_3, 
                style: style_Segnalazionicittadini_3,
                popuplayertitle: 'Segnalazioni cittadini',
                interactive: true,
                title: '<img src="styles/legend/Segnalazionicittadini_3.png" /> Segnalazioni cittadini'
            });
var format_Perimetro_4 = new ol.format.GeoJSON();
var features_Perimetro_4 = format_Perimetro_4.readFeatures(json_Perimetro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetro_4.addFeatures(features_Perimetro_4);
var lyr_Perimetro_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetro_4, 
                style: style_Perimetro_4,
                popuplayertitle: 'Perimetro',
                interactive: true,
                title: '<img src="styles/legend/Perimetro_4.png" /> Perimetro'
            });
var group_Orografia = new ol.layer.Group({
                                layers: [],
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

lyr_GoogleSatellite_0.setVisible(true);lyr_comunicazione1_1.setVisible(true);lyr_acqua5_2.setVisible(true);lyr_Segnalazionicittadini_3.setVisible(true);lyr_Perimetro_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Comunicazione,group_Acqua,lyr_Segnalazionicittadini_3,lyr_Perimetro_4];
lyr_comunicazione1_1.set('fieldAliases', {'ID': 'ID', 'FOGLIO': 'FOGLIO', 'CODICE': 'CODICE', 'DESCRIZION': 'DESCRIZION', 'TIPO': 'TIPO', 'PUNTI': 'PUNTI', 'IDENT': 'IDENT', 'BORDO': 'BORDO', 'ANNORILEV': 'ANNORILEV', 'FLAGSTATO': 'FLAGSTATO', 'TIPOSTRADA': 'TIPOSTRADA', 'CODICEIDNT': 'CODICEIDNT', 'TOPONIMO': 'TOPONIMO', 'CLASSLARGH': 'CLASSLARGH', 'STATO': 'STATO', 'SEDE': 'SEDE', 'TRATTO': 'TRATTO', 'TIPNODOINZ': 'TIPNODOINZ', 'TIPNODOFIN': 'TIPNODOFIN', });
lyr_acqua5_2.set('fieldAliases', {'ID': 'ID', 'FOGLIO': 'FOGLIO', 'CODICE': 'CODICE', 'DESCRIZION': 'DESCRIZION', 'TIPO': 'TIPO', 'PUNTI': 'PUNTI', 'IDENT': 'IDENT', 'BORDO': 'BORDO', 'ANNORILEV': 'ANNORILEV', 'FLAGSTATO': 'FLAGSTATO', 'TIPCORSO': 'TIPCORSO', 'CODICEIDNT': 'CODICEIDNT', 'TOPONIMO': 'TOPONIMO', 'MODALSCORR': 'MODALSCORR', 'MEZZERIA': 'MEZZERIA', 'TIPNODOINZ': 'TIPNODOINZ', 'TIPNODOFIN': 'TIPNODOFIN', });
lyr_Segnalazionicittadini_3.set('fieldAliases', {'id segnala': 'id segnala', 'nome segna': 'nome segna', 'tipo segna': 'tipo segna', 'data segna': 'data segna', 'via': 'via', 'foto': 'foto', 'descrizion': 'descrizion', 'coordinate': 'coordinate', });
lyr_Perimetro_4.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Foto': 'Foto', });
lyr_comunicazione1_1.set('fieldImages', {'ID': 'Range', 'FOGLIO': 'TextEdit', 'CODICE': 'TextEdit', 'DESCRIZION': 'TextEdit', 'TIPO': 'TextEdit', 'PUNTI': 'Range', 'IDENT': 'Range', 'BORDO': 'Range', 'ANNORILEV': 'Range', 'FLAGSTATO': 'TextEdit', 'TIPOSTRADA': 'TextEdit', 'CODICEIDNT': 'TextEdit', 'TOPONIMO': 'TextEdit', 'CLASSLARGH': 'TextEdit', 'STATO': 'TextEdit', 'SEDE': 'TextEdit', 'TRATTO': 'TextEdit', 'TIPNODOINZ': 'TextEdit', 'TIPNODOFIN': 'TextEdit', });
lyr_acqua5_2.set('fieldImages', {'ID': 'Range', 'FOGLIO': 'TextEdit', 'CODICE': 'TextEdit', 'DESCRIZION': 'TextEdit', 'TIPO': 'TextEdit', 'PUNTI': 'Range', 'IDENT': 'Range', 'BORDO': 'Range', 'ANNORILEV': 'Range', 'FLAGSTATO': 'TextEdit', 'TIPCORSO': 'TextEdit', 'CODICEIDNT': 'TextEdit', 'TOPONIMO': 'TextEdit', 'MODALSCORR': 'TextEdit', 'MEZZERIA': 'TextEdit', 'TIPNODOINZ': 'TextEdit', 'TIPNODOFIN': 'TextEdit', });
lyr_Segnalazionicittadini_3.set('fieldImages', {'id segnala': 'TextEdit', 'nome segna': 'TextEdit', 'tipo segna': 'TextEdit', 'data segna': 'DateTime', 'via': 'TextEdit', 'foto': 'ExternalResource', 'descrizion': '', 'coordinate': 'TextEdit', });
lyr_Perimetro_4.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_comunicazione1_1.set('fieldLabels', {'ID': 'header label - always visible', 'FOGLIO': 'header label - always visible', 'CODICE': 'no label', 'DESCRIZION': 'no label', 'TIPO': 'no label', 'PUNTI': 'no label', 'IDENT': 'no label', 'BORDO': 'no label', 'ANNORILEV': 'no label', 'FLAGSTATO': 'no label', 'TIPOSTRADA': 'no label', 'CODICEIDNT': 'no label', 'TOPONIMO': 'inline label - visible with data', 'CLASSLARGH': 'no label', 'STATO': 'no label', 'SEDE': 'no label', 'TRATTO': 'no label', 'TIPNODOINZ': 'no label', 'TIPNODOFIN': 'no label', });
lyr_acqua5_2.set('fieldLabels', {'ID': 'no label', 'FOGLIO': 'header label - visible with data', 'CODICE': 'header label - visible with data', 'DESCRIZION': 'no label', 'TIPO': 'no label', 'PUNTI': 'no label', 'IDENT': 'no label', 'BORDO': 'no label', 'ANNORILEV': 'no label', 'FLAGSTATO': 'no label', 'TIPCORSO': 'no label', 'CODICEIDNT': 'no label', 'TOPONIMO': 'inline label - visible with data', 'MODALSCORR': 'no label', 'MEZZERIA': 'no label', 'TIPNODOINZ': 'no label', 'TIPNODOFIN': 'no label', });
lyr_Segnalazionicittadini_3.set('fieldLabels', {'id segnala': 'inline label - always visible', 'nome segna': 'no label', 'tipo segna': 'no label', 'data segna': 'no label', 'via': 'no label', 'foto': 'header label - always visible', 'descrizion': 'no label', 'coordinate': 'no label', });
lyr_Perimetro_4.set('fieldLabels', {'id': 'header label - visible with data', 'Nome': 'header label - visible with data', 'Foto': 'header label - visible with data', });
lyr_Perimetro_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});