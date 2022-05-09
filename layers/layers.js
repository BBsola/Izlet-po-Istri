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
var format_mapstogpx20220509_121448waypoints_1 = new ol.format.GeoJSON();
var features_mapstogpx20220509_121448waypoints_1 = format_mapstogpx20220509_121448waypoints_1.readFeatures(json_mapstogpx20220509_121448waypoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapstogpx20220509_121448waypoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapstogpx20220509_121448waypoints_1.addFeatures(features_mapstogpx20220509_121448waypoints_1);
var lyr_mapstogpx20220509_121448waypoints_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mapstogpx20220509_121448waypoints_1, 
                style: style_mapstogpx20220509_121448waypoints_1,
                interactive: false,
                title: '<img src="styles/legend/mapstogpx20220509_121448waypoints_1.png" /> mapstogpx20220509_121448 — waypoints'
            });
var format_mapstogpx20220509_121448tracks_2 = new ol.format.GeoJSON();
var features_mapstogpx20220509_121448tracks_2 = format_mapstogpx20220509_121448tracks_2.readFeatures(json_mapstogpx20220509_121448tracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapstogpx20220509_121448tracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapstogpx20220509_121448tracks_2.addFeatures(features_mapstogpx20220509_121448tracks_2);
var lyr_mapstogpx20220509_121448tracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mapstogpx20220509_121448tracks_2, 
                style: style_mapstogpx20220509_121448tracks_2,
                interactive: false,
                title: '<img src="styles/legend/mapstogpx20220509_121448tracks_2.png" /> mapstogpx20220509_121448 — tracks'
            });
var format_mapstogpx20220509_121448track_points_3 = new ol.format.GeoJSON();
var features_mapstogpx20220509_121448track_points_3 = format_mapstogpx20220509_121448track_points_3.readFeatures(json_mapstogpx20220509_121448track_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapstogpx20220509_121448track_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapstogpx20220509_121448track_points_3.addFeatures(features_mapstogpx20220509_121448track_points_3);
var lyr_mapstogpx20220509_121448track_points_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mapstogpx20220509_121448track_points_3, 
                style: style_mapstogpx20220509_121448track_points_3,
                interactive: false,
                title: '<img src="styles/legend/mapstogpx20220509_121448track_points_3.png" /> mapstogpx20220509_121448 — track_points'
            });
var format_mapstogpx20220509_121448routes_4 = new ol.format.GeoJSON();
var features_mapstogpx20220509_121448routes_4 = format_mapstogpx20220509_121448routes_4.readFeatures(json_mapstogpx20220509_121448routes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapstogpx20220509_121448routes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapstogpx20220509_121448routes_4.addFeatures(features_mapstogpx20220509_121448routes_4);
var lyr_mapstogpx20220509_121448routes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mapstogpx20220509_121448routes_4, 
                style: style_mapstogpx20220509_121448routes_4,
                interactive: false,
                title: '<img src="styles/legend/mapstogpx20220509_121448routes_4.png" /> mapstogpx20220509_121448 — routes'
            });
var format_mapstogpx20220509_121448route_points_5 = new ol.format.GeoJSON();
var features_mapstogpx20220509_121448route_points_5 = format_mapstogpx20220509_121448route_points_5.readFeatures(json_mapstogpx20220509_121448route_points_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapstogpx20220509_121448route_points_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapstogpx20220509_121448route_points_5.addFeatures(features_mapstogpx20220509_121448route_points_5);
var lyr_mapstogpx20220509_121448route_points_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mapstogpx20220509_121448route_points_5, 
                style: style_mapstogpx20220509_121448route_points_5,
                interactive: false,
                title: '<img src="styles/legend/mapstogpx20220509_121448route_points_5.png" /> mapstogpx20220509_121448 — route_points'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mapstogpx20220509_121448waypoints_1.setVisible(true);lyr_mapstogpx20220509_121448tracks_2.setVisible(true);lyr_mapstogpx20220509_121448track_points_3.setVisible(true);lyr_mapstogpx20220509_121448routes_4.setVisible(true);lyr_mapstogpx20220509_121448route_points_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mapstogpx20220509_121448waypoints_1,lyr_mapstogpx20220509_121448tracks_2,lyr_mapstogpx20220509_121448track_points_3,lyr_mapstogpx20220509_121448routes_4,lyr_mapstogpx20220509_121448route_points_5];
lyr_mapstogpx20220509_121448waypoints_1.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_mapstogpx20220509_121448tracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_mapstogpx20220509_121448track_points_3.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_mapstogpx20220509_121448routes_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_mapstogpx20220509_121448route_points_5.set('fieldAliases', {'route_fid': 'route_fid', 'route_point_id': 'route_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_mapstogpx20220509_121448waypoints_1.set('fieldImages', {'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', });
lyr_mapstogpx20220509_121448tracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_mapstogpx20220509_121448track_points_3.set('fieldImages', {'track_fid': 'Range', 'track_seg_id': 'Range', 'track_seg_point_id': 'Range', 'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', });
lyr_mapstogpx20220509_121448routes_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_mapstogpx20220509_121448route_points_5.set('fieldImages', {'route_fid': 'Range', 'route_point_id': 'Range', 'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', });
lyr_mapstogpx20220509_121448waypoints_1.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_mapstogpx20220509_121448tracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_mapstogpx20220509_121448track_points_3.set('fieldLabels', {'track_fid': 'no label', 'track_seg_id': 'no label', 'track_seg_point_id': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_mapstogpx20220509_121448routes_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_mapstogpx20220509_121448route_points_5.set('fieldLabels', {'route_fid': 'no label', 'route_point_id': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_mapstogpx20220509_121448route_points_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});