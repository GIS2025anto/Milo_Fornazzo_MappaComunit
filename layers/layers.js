var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_acqua5_1 = new ol.format.GeoJSON();
var features_acqua5_1 = format_acqua5_1.readFeatures(json_acqua5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_acqua5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_acqua5_1.addFeatures(features_acqua5_1);
var lyr_acqua5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_acqua5_1, 
                style: style_acqua5_1,
                popuplayertitle: 'acqua5',
                interactive: true,
    title: 'acqua5<br />\
    <img src="styles/legend/acqua5_1_0.png" /> 0<br />\
    <img src="styles/legend/acqua5_1_1.png" /> <br />' });
var format_curve_di_livello_2 = new ol.format.GeoJSON();
var features_curve_di_livello_2 = format_curve_di_livello_2.readFeatures(json_curve_di_livello_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_curve_di_livello_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_curve_di_livello_2.addFeatures(features_curve_di_livello_2);
var lyr_curve_di_livello_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_curve_di_livello_2, 
                style: style_curve_di_livello_2,
                popuplayertitle: 'curve_di_livello',
                interactive: true,
                title: '<img src="styles/legend/curve_di_livello_2.png" /> curve_di_livello'
            });
var format_Segnalazioni_3 = new ol.format.GeoJSON();
var features_Segnalazioni_3 = format_Segnalazioni_3.readFeatures(json_Segnalazioni_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segnalazioni_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segnalazioni_3.addFeatures(features_Segnalazioni_3);
var lyr_Segnalazioni_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Segnalazioni_3, 
                style: style_Segnalazioni_3,
                popuplayertitle: 'Segnalazioni',
                interactive: true,
                title: '<img src="styles/legend/Segnalazioni_3.png" /> Segnalazioni'
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
                                layers: [lyr_curve_di_livello_2,],
                                fold: 'open',
                                title: 'Orografia'});
var group_Acqua = new ol.layer.Group({
                                layers: [lyr_acqua5_1,],
                                fold: 'open',
                                title: 'Acqua'});

lyr_GoogleSatellite_0.setVisible(true);lyr_acqua5_1.setVisible(true);lyr_curve_di_livello_2.setVisible(true);lyr_Segnalazioni_3.setVisible(true);lyr_Perimetro_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Acqua,group_Orografia,lyr_Segnalazioni_3,lyr_Perimetro_4];
lyr_acqua5_1.set('fieldAliases', {'ID': 'ID', 'FOGLIO': 'FOGLIO', 'CODICE': 'CODICE', 'DESCRIZION': 'DESCRIZION', 'TIPO': 'TIPO', 'PUNTI': 'PUNTI', 'IDENT': 'IDENT', 'BORDO': 'BORDO', 'ANNORILEV': 'ANNORILEV', 'FLAGSTATO': 'FLAGSTATO', 'TIPCORSO': 'TIPCORSO', 'CODICEIDNT': 'CODICEIDNT', 'TOPONIMO': 'TOPONIMO', 'MODALSCORR': 'MODALSCORR', 'MEZZERIA': 'MEZZERIA', 'TIPNODOINZ': 'TIPNODOINZ', 'TIPNODOFIN': 'TIPNODOFIN', });
lyr_curve_di_livello_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'foglio': 'foglio', 'codice': 'codice', 'descrizion': 'descrizion', 'tipo': 'tipo', 'punti': 'punti', 'ident': 'ident', 'bordo': 'bordo', 'annorilev': 'annorilev', 'flagstato': 'flagstato', 'quota': 'quota', 'st_length_': 'st_length_', 'Shape_Leng': 'Shape_Leng', });
lyr_Segnalazioni_3.set('fieldAliases', {'id segnala': 'id segnala', 'nome segna': 'nome segna', 'tipo segna': 'tipo segna', 'data segna': 'data segna', 'via': 'via', 'foto': 'foto', 'descrizion': 'descrizion', 'coordinate': 'coordinate', });
lyr_Perimetro_4.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Foto': 'Foto', });
lyr_acqua5_1.set('fieldImages', {'ID': 'Range', 'FOGLIO': 'TextEdit', 'CODICE': 'TextEdit', 'DESCRIZION': 'TextEdit', 'TIPO': 'TextEdit', 'PUNTI': 'Range', 'IDENT': 'Range', 'BORDO': 'Range', 'ANNORILEV': 'Range', 'FLAGSTATO': 'TextEdit', 'TIPCORSO': 'TextEdit', 'CODICEIDNT': 'TextEdit', 'TOPONIMO': 'TextEdit', 'MODALSCORR': 'TextEdit', 'MEZZERIA': 'TextEdit', 'TIPNODOINZ': 'TextEdit', 'TIPNODOFIN': 'TextEdit', });
lyr_curve_di_livello_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'Range', 'foglio': 'TextEdit', 'codice': 'TextEdit', 'descrizion': 'TextEdit', 'tipo': 'TextEdit', 'punti': 'Range', 'ident': 'Range', 'bordo': 'Range', 'annorilev': 'Range', 'flagstato': 'TextEdit', 'quota': 'TextEdit', 'st_length_': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Segnalazioni_3.set('fieldImages', {'id segnala': 'TextEdit', 'nome segna': 'TextEdit', 'tipo segna': 'TextEdit', 'data segna': 'DateTime', 'via': 'TextEdit', 'foto': 'ExternalResource', 'descrizion': 'TextEdit', 'coordinate': 'TextEdit', });
lyr_Perimetro_4.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_acqua5_1.set('fieldLabels', {'ID': 'no label', 'FOGLIO': 'header label - visible with data', 'CODICE': 'header label - visible with data', 'DESCRIZION': 'no label', 'TIPO': 'no label', 'PUNTI': 'no label', 'IDENT': 'no label', 'BORDO': 'no label', 'ANNORILEV': 'no label', 'FLAGSTATO': 'no label', 'TIPCORSO': 'no label', 'CODICEIDNT': 'no label', 'TOPONIMO': 'inline label - visible with data', 'MODALSCORR': 'no label', 'MEZZERIA': 'no label', 'TIPNODOINZ': 'no label', 'TIPNODOFIN': 'no label', });
lyr_curve_di_livello_2.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'foglio': 'no label', 'codice': 'no label', 'descrizion': 'no label', 'tipo': 'no label', 'punti': 'no label', 'ident': 'no label', 'bordo': 'no label', 'annorilev': 'no label', 'flagstato': 'no label', 'quota': 'no label', 'st_length_': 'no label', 'Shape_Leng': 'no label', });
lyr_Segnalazioni_3.set('fieldLabels', {'id segnala': 'inline label - always visible', 'nome segna': 'no label', 'tipo segna': 'no label', 'data segna': 'no label', 'via': 'no label', 'foto': 'header label - always visible', 'descrizion': 'no label', 'coordinate': 'no label', });
lyr_Perimetro_4.set('fieldLabels', {'id': 'header label - visible with data', 'Nome': 'header label - visible with data', 'Foto': 'header label - visible with data', });
lyr_Perimetro_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});