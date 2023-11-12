var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MiraBhayander_1 = new ol.format.GeoJSON();
var features_MiraBhayander_1 = format_MiraBhayander_1.readFeatures(json_MiraBhayander_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiraBhayander_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiraBhayander_1.addFeatures(features_MiraBhayander_1);
var lyr_MiraBhayander_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MiraBhayander_1, 
                style: style_MiraBhayander_1,
                interactive: true,
                title: '<img src="styles/legend/MiraBhayander_1.png" /> Mira Bhayander'
            });
var format_DirectionsfromUttanNakatoBhayanderStnWChowk_2 = new ol.format.GeoJSON();
var features_DirectionsfromUttanNakatoBhayanderStnWChowk_2 = format_DirectionsfromUttanNakatoBhayanderStnWChowk_2.readFeatures(json_DirectionsfromUttanNakatoBhayanderStnWChowk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromUttanNakatoBhayanderStnWChowk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromUttanNakatoBhayanderStnWChowk_2.addFeatures(features_DirectionsfromUttanNakatoBhayanderStnWChowk_2);
var lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromUttanNakatoBhayanderStnWChowk_2, 
                style: style_DirectionsfromUttanNakatoBhayanderStnWChowk_2,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromUttanNakatoBhayanderStnWChowk_2.png" /> Directions from Uttan Naka to Bhayander Stn W Chowk'
            });
var format_DirectionsfromUttanNakatoBhayanderStnWChowk_3 = new ol.format.GeoJSON();
var features_DirectionsfromUttanNakatoBhayanderStnWChowk_3 = format_DirectionsfromUttanNakatoBhayanderStnWChowk_3.readFeatures(json_DirectionsfromUttanNakatoBhayanderStnWChowk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromUttanNakatoBhayanderStnWChowk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromUttanNakatoBhayanderStnWChowk_3.addFeatures(features_DirectionsfromUttanNakatoBhayanderStnWChowk_3);
var lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromUttanNakatoBhayanderStnWChowk_3, 
                style: style_DirectionsfromUttanNakatoBhayanderStnWChowk_3,
                interactive: true,
                title: 'Directions from Uttan Naka to Bhayander Stn W Chowk'
            });
var format_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4 = new ol.format.GeoJSON();
var features_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4 = format_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4.readFeatures(json_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4.addFeatures(features_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4);
var lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4, 
                style: style_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromChowkBusStandtoBhayanderStnWChowk_4.png" /> Directions from Chowk Bus Stand to Bhayander Stn W Chowk'
            });
var format_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5 = new ol.format.GeoJSON();
var features_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5 = format_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5.readFeatures(json_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5.addFeatures(features_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5);
var lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5, 
                style: style_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5,
                interactive: true,
                title: 'Directions from Chowk Bus Stand to Bhayander Stn W Chowk'
            });
var format_DirectionsfromBhayandarBusStationtoThaneStationE_6 = new ol.format.GeoJSON();
var features_DirectionsfromBhayandarBusStationtoThaneStationE_6 = format_DirectionsfromBhayandarBusStationtoThaneStationE_6.readFeatures(json_DirectionsfromBhayandarBusStationtoThaneStationE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromBhayandarBusStationtoThaneStationE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromBhayandarBusStationtoThaneStationE_6.addFeatures(features_DirectionsfromBhayandarBusStationtoThaneStationE_6);
var lyr_DirectionsfromBhayandarBusStationtoThaneStationE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromBhayandarBusStationtoThaneStationE_6, 
                style: style_DirectionsfromBhayandarBusStationtoThaneStationE_6,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromBhayandarBusStationtoThaneStationE_6.png" /> Directions from Bhayandar Bus Station to Thane Station (E)'
            });
var format_DirectionsfromBhayandarBusStationtoThaneStationE_7 = new ol.format.GeoJSON();
var features_DirectionsfromBhayandarBusStationtoThaneStationE_7 = format_DirectionsfromBhayandarBusStationtoThaneStationE_7.readFeatures(json_DirectionsfromBhayandarBusStationtoThaneStationE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromBhayandarBusStationtoThaneStationE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromBhayandarBusStationtoThaneStationE_7.addFeatures(features_DirectionsfromBhayandarBusStationtoThaneStationE_7);
var lyr_DirectionsfromBhayandarBusStationtoThaneStationE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromBhayandarBusStationtoThaneStationE_7, 
                style: style_DirectionsfromBhayandarBusStationtoThaneStationE_7,
                interactive: true,
                title: 'Directions from Bhayandar Bus Station to Thane Station (E)'
            });
var format_DirectionsfromBhayandarBusStationtoManoriJetty_8 = new ol.format.GeoJSON();
var features_DirectionsfromBhayandarBusStationtoManoriJetty_8 = format_DirectionsfromBhayandarBusStationtoManoriJetty_8.readFeatures(json_DirectionsfromBhayandarBusStationtoManoriJetty_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromBhayandarBusStationtoManoriJetty_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromBhayandarBusStationtoManoriJetty_8.addFeatures(features_DirectionsfromBhayandarBusStationtoManoriJetty_8);
var lyr_DirectionsfromBhayandarBusStationtoManoriJetty_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromBhayandarBusStationtoManoriJetty_8, 
                style: style_DirectionsfromBhayandarBusStationtoManoriJetty_8,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromBhayandarBusStationtoManoriJetty_8.png" /> Directions from Bhayandar Bus Station to Manori Jetty'
            });
var format_DirectionsfromBhayandarBusStationtoManoriJetty_9 = new ol.format.GeoJSON();
var features_DirectionsfromBhayandarBusStationtoManoriJetty_9 = format_DirectionsfromBhayandarBusStationtoManoriJetty_9.readFeatures(json_DirectionsfromBhayandarBusStationtoManoriJetty_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromBhayandarBusStationtoManoriJetty_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromBhayandarBusStationtoManoriJetty_9.addFeatures(features_DirectionsfromBhayandarBusStationtoManoriJetty_9);
var lyr_DirectionsfromBhayandarBusStationtoManoriJetty_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromBhayandarBusStationtoManoriJetty_9, 
                style: style_DirectionsfromBhayandarBusStationtoManoriJetty_9,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromBhayandarBusStationtoManoriJetty_9.png" /> Directions from Bhayandar Bus Station to Manori Jetty'
            });
var format_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10 = new ol.format.GeoJSON();
var features_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10 = format_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10.readFeatures(json_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10.addFeatures(features_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10);
var lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10, 
                style: style_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10.png" /> Directions from Bhayandar Bus Station to Global Vipassana Pagoda'
            });
var format_DirectionsfromBhayandarBusStationtoUttanNaka_11 = new ol.format.GeoJSON();
var features_DirectionsfromBhayandarBusStationtoUttanNaka_11 = format_DirectionsfromBhayandarBusStationtoUttanNaka_11.readFeatures(json_DirectionsfromBhayandarBusStationtoUttanNaka_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromBhayandarBusStationtoUttanNaka_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromBhayandarBusStationtoUttanNaka_11.addFeatures(features_DirectionsfromBhayandarBusStationtoUttanNaka_11);
var lyr_DirectionsfromBhayandarBusStationtoUttanNaka_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromBhayandarBusStationtoUttanNaka_11, 
                style: style_DirectionsfromBhayandarBusStationtoUttanNaka_11,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromBhayandarBusStationtoUttanNaka_11.png" /> Directions from Bhayandar Bus Station to Uttan Naka'
            });
var format_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12 = new ol.format.GeoJSON();
var features_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12 = format_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12.readFeatures(json_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12.addFeatures(features_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12);
var lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12, 
                style: style_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12.png" /> Directions from Bhayandar Bus Station to Global Vipassana Pagoda'
            });
var format_BhayandertoManoriJetty_13 = new ol.format.GeoJSON();
var features_BhayandertoManoriJetty_13 = format_BhayandertoManoriJetty_13.readFeatures(json_BhayandertoManoriJetty_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhayandertoManoriJetty_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhayandertoManoriJetty_13.addFeatures(features_BhayandertoManoriJetty_13);
var lyr_BhayandertoManoriJetty_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhayandertoManoriJetty_13, 
                style: style_BhayandertoManoriJetty_13,
                interactive: true,
                title: '<img src="styles/legend/BhayandertoManoriJetty_13.png" /> Bhayander to Manori Jetty'
            });
var format_BhayanderStnwtoThaneEStops_14 = new ol.format.GeoJSON();
var features_BhayanderStnwtoThaneEStops_14 = format_BhayanderStnwtoThaneEStops_14.readFeatures(json_BhayanderStnwtoThaneEStops_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhayanderStnwtoThaneEStops_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhayanderStnwtoThaneEStops_14.addFeatures(features_BhayanderStnwtoThaneEStops_14);
var lyr_BhayanderStnwtoThaneEStops_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhayanderStnwtoThaneEStops_14, 
                style: style_BhayanderStnwtoThaneEStops_14,
                interactive: true,
                title: '<img src="styles/legend/BhayanderStnwtoThaneEStops_14.png" /> Bhayander Stn w to Thane E Stops'
            });
var format_Stops_15 = new ol.format.GeoJSON();
var features_Stops_15 = format_Stops_15.readFeatures(json_Stops_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stops_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stops_15.addFeatures(features_Stops_15);
var lyr_Stops_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stops_15, 
                style: style_Stops_15,
                interactive: true,
                title: '<img src="styles/legend/Stops_15.png" /> Stops'
            });
var format_Stops_16 = new ol.format.GeoJSON();
var features_Stops_16 = format_Stops_16.readFeatures(json_Stops_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stops_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stops_16.addFeatures(features_Stops_16);
var lyr_Stops_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stops_16, 
                style: style_Stops_16,
                interactive: true,
                title: '<img src="styles/legend/Stops_16.png" /> Stops'
            });
var format_StopsfromBhyanderStntoPagoda_17 = new ol.format.GeoJSON();
var features_StopsfromBhyanderStntoPagoda_17 = format_StopsfromBhyanderStntoPagoda_17.readFeatures(json_StopsfromBhyanderStntoPagoda_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsfromBhyanderStntoPagoda_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsfromBhyanderStntoPagoda_17.addFeatures(features_StopsfromBhyanderStntoPagoda_17);
var lyr_StopsfromBhyanderStntoPagoda_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsfromBhyanderStntoPagoda_17, 
                style: style_StopsfromBhyanderStntoPagoda_17,
                interactive: true,
                title: '<img src="styles/legend/StopsfromBhyanderStntoPagoda_17.png" /> Stops from Bhyander Stn to Pagoda'
            });
var format_MBTestRouteMtrs_18 = new ol.format.GeoJSON();
var features_MBTestRouteMtrs_18 = format_MBTestRouteMtrs_18.readFeatures(json_MBTestRouteMtrs_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBTestRouteMtrs_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBTestRouteMtrs_18.addFeatures(features_MBTestRouteMtrs_18);
var lyr_MBTestRouteMtrs_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBTestRouteMtrs_18, 
                style: style_MBTestRouteMtrs_18,
                interactive: true,
                title: '<img src="styles/legend/MBTestRouteMtrs_18.png" /> MB Test Route Mtrs'
            });
var format_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19 = new ol.format.GeoJSON();
var features_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19 = format_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19.readFeatures(json_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19.addFeatures(features_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19);
var lyr_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19, 
                style: style_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19,
                interactive: true,
                title: '<img src="styles/legend/DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19.png" /> Directions from Mira Road Stn E to Godbunder-Village-Nagari'
            });
var format_CurrentDriving_20 = new ol.format.GeoJSON();
var features_CurrentDriving_20 = format_CurrentDriving_20.readFeatures(json_CurrentDriving_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurrentDriving_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurrentDriving_20.addFeatures(features_CurrentDriving_20);
var lyr_CurrentDriving_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurrentDriving_20, 
                style: style_CurrentDriving_20,
                interactive: true,
                title: '<img src="styles/legend/CurrentDriving_20.png" /> Current Driving'
            });
var format_MiraBhayanderStops_21 = new ol.format.GeoJSON();
var features_MiraBhayanderStops_21 = format_MiraBhayanderStops_21.readFeatures(json_MiraBhayanderStops_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiraBhayanderStops_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiraBhayanderStops_21.addFeatures(features_MiraBhayanderStops_21);
var lyr_MiraBhayanderStops_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MiraBhayanderStops_21, 
                style: style_MiraBhayanderStops_21,
                interactive: true,
                title: '<img src="styles/legend/MiraBhayanderStops_21.png" /> Mira Bhayander Stops'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MiraBhayander_1.setVisible(true);lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_2.setVisible(true);lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_3.setVisible(true);lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4.setVisible(true);lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5.setVisible(true);lyr_DirectionsfromBhayandarBusStationtoThaneStationE_6.setVisible(true);lyr_DirectionsfromBhayandarBusStationtoThaneStationE_7.setVisible(true);lyr_DirectionsfromBhayandarBusStationtoManoriJetty_8.setVisible(true);lyr_DirectionsfromBhayandarBusStationtoManoriJetty_9.setVisible(true);lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10.setVisible(true);lyr_DirectionsfromBhayandarBusStationtoUttanNaka_11.setVisible(true);lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12.setVisible(true);lyr_BhayandertoManoriJetty_13.setVisible(true);lyr_BhayanderStnwtoThaneEStops_14.setVisible(true);lyr_Stops_15.setVisible(true);lyr_Stops_16.setVisible(true);lyr_StopsfromBhyanderStntoPagoda_17.setVisible(true);lyr_MBTestRouteMtrs_18.setVisible(true);lyr_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19.setVisible(true);lyr_CurrentDriving_20.setVisible(true);lyr_MiraBhayanderStops_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MiraBhayander_1,lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_2,lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_3,lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4,lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5,lyr_DirectionsfromBhayandarBusStationtoThaneStationE_6,lyr_DirectionsfromBhayandarBusStationtoThaneStationE_7,lyr_DirectionsfromBhayandarBusStationtoManoriJetty_8,lyr_DirectionsfromBhayandarBusStationtoManoriJetty_9,lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10,lyr_DirectionsfromBhayandarBusStationtoUttanNaka_11,lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12,lyr_BhayandertoManoriJetty_13,lyr_BhayanderStnwtoThaneEStops_14,lyr_Stops_15,lyr_Stops_16,lyr_StopsfromBhyanderStntoPagoda_17,lyr_MBTestRouteMtrs_18,lyr_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19,lyr_CurrentDriving_20,lyr_MiraBhayanderStops_21];
lyr_MiraBhayander_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromBhayandarBusStationtoThaneStationE_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromBhayandarBusStationtoThaneStationE_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromBhayandarBusStationtoManoriJetty_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromBhayandarBusStationtoManoriJetty_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromBhayandarBusStationtoUttanNaka_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BhayandertoManoriJetty_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BhayanderStnwtoThaneEStops_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Stops_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Stops_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_StopsfromBhyanderStntoPagoda_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MBTestRouteMtrs_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CurrentDriving_20.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MiraBhayanderStops_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MiraBhayander_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_DirectionsfromBhayandarBusStationtoThaneStationE_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DirectionsfromBhayandarBusStationtoThaneStationE_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_DirectionsfromBhayandarBusStationtoManoriJetty_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DirectionsfromBhayandarBusStationtoManoriJetty_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DirectionsfromBhayandarBusStationtoUttanNaka_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_BhayandertoManoriJetty_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_BhayanderStnwtoThaneEStops_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Stops_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Stops_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_StopsfromBhyanderStntoPagoda_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MBTestRouteMtrs_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CurrentDriving_20.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MiraBhayanderStops_21.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MiraBhayander_1.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_2.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromUttanNakatoBhayanderStnWChowk_3.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_4.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromChowkBusStandtoBhayanderStnWChowk_5.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromBhayandarBusStationtoThaneStationE_6.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromBhayandarBusStationtoThaneStationE_7.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromBhayandarBusStationtoManoriJetty_8.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromBhayandarBusStationtoManoriJetty_9.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_10.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromBhayandarBusStationtoUttanNaka_11.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromBhayandarBusStationtoGlobalVipassanaPagoda_12.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BhayandertoManoriJetty_13.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BhayanderStnwtoThaneEStops_14.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Stops_15.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Stops_16.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_StopsfromBhyanderStntoPagoda_17.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MBTestRouteMtrs_18.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DirectionsfromMiraRoadStnEtoGodbunderVillageNagari_19.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CurrentDriving_20.set('fieldLabels', {'DIST_KM': 'header label', 'DURATION_H': 'header label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label', 'TO_ID': 'inline label', });
lyr_MiraBhayanderStops_21.set('fieldLabels', {'Name': 'header label', 'description': 'inline label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MiraBhayanderStops_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});