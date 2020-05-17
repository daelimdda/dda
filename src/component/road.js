/*global kakao*/
import React , { Component } from "react";
import './road.css'
import dobongA from "../image/dobongA.PNG";

class Road extends Component {
    componentDidMount= () => {
        // 이미지 지도에 표시할 마커입니다
// 이미지 지도에 표시할 마커를 아래와 같이 배열로 넣어주면 여러개의 마커를 표시할 수 있습니다 
    var markers = [
        {
            position: new kakao.maps.LatLng(37.657569, 127.057997),
           
        },
        {
            position: new kakao.maps.LatLng(37.657892, 127.059338), 
           
        }
    ];

    var staticMapContainer  = document.getElementById('myMap'), // 이미지 지도를 표시할 div  
        staticMapOption = { 
            center: new kakao.maps.LatLng(37.657977, 127.059671), // 이미지 지도의 중심좌표
            level: 5, // 이미지 지도의 확대 레벨
            marker: markers // 이미지 지도에 표시할 마커 
    };    

    // 이미지 지도를 생성합니다
    var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
        
    // 지도에 올릴 장소명 인포윈도우 입니다.
    var mLabel = new kakao.maps.InfoWindow({
        position: new kakao.maps.LatLng(37.657977, 127.059671), // 지도의 중심좌표에 올립니다.
        content: '좌회전' // 인포윈도우 내부에 들어갈 컨텐츠 입니다.
    });
    
    var mLabel1 = new kakao.maps.InfoWindow({
        position: new kakao.maps.LatLng(37.657892, 127.059338), // 지도의 중심좌표에 올립니다.
        content: '시작' // 인포윈도우 내부에 들어갈 컨텐츠 입니다.
    });
     // 지도에 올리면서, 두번째 인자로 들어간 마커 위에 올라가도록 설정합니다.
    
    var rvContainer = document.getElementById('roadview'); // 로드뷰를 표시할 div
    
    var rv = new kakao.maps.Roadview(rvContainer); // 로드뷰 객체 생성
    var rc = new kakao.maps.RoadviewClient(); // 좌표를 통한 로드뷰의 panoid를 추출하기 위한 로드뷰 help객체 생성 
    var rvPosition = new kakao.maps.LatLng(37.657977, 127.059671);
    
    rc.getNearestPanoId(rvPosition, 50, function(panoid) {
        rv.setPanoId(panoid, rvPosition);//좌표에 근접한 panoId를 통해 로드뷰를 실행합니다.
    });
    
    // 로드뷰 초기화 이벤트
    kakao.maps.event.addListener(rv, 'init', function() {
    
        // 로드뷰에 올릴 마커를 생성합니다.
        var rMarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.650761, 127.068449),
            map: rv //map 대신 rv(로드뷰 객체)로 설정하면 로드뷰에 올라갑니다.
        });
        rMarker.setAltitude(2); //마커의 높이를 설정합니다. (단위는 m입니다.)
        rMarker.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
    
        // 로드뷰에 올릴 장소명 인포윈도우를 생성합니다.
        var rLabel = new kakao.maps.InfoWindow({
            content: '유턴'
        });
        rLabel.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
        rLabel.open(rv, rMarker);

        var rMarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.658680, 127.059526),
            map: rv //map 대신 rv(로드뷰 객체)로 설정하면 로드뷰에 올라갑니다.
        });
        rMarker.setAltitude(2); //마커의 높이를 설정합니다. (단위는 m입니다.)
        rMarker.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
    
        // 로드뷰에 올릴 장소명 인포윈도우를 생성합니다.
        var rLabel = new kakao.maps.InfoWindow({
            content: '직진'
        });
        rLabel.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
        rLabel.open(rv, rMarker);
        var rMarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.657145, 127.066486),
            map: rv //map 대신 rv(로드뷰 객체)로 설정하면 로드뷰에 올라갑니다.
        });
        rMarker.setAltitude(2); //마커의 높이를 설정합니다. (단위는 m입니다.)
        rMarker.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
    
        // 로드뷰에 올릴 장소명 인포윈도우를 생성합니다.
        var rLabel = new kakao.maps.InfoWindow({
            content: '직진'
        });
        rLabel.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
        rLabel.open(rv, rMarker); 

        var rMarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.660803, 127.058925),
            map: rv //map 대신 rv(로드뷰 객체)로 설정하면 로드뷰에 올라갑니다.
        });
        rMarker.setAltitude(2); //마커의 높이를 설정합니다. (단위는 m입니다.)
        rMarker.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
    
        // 로드뷰에 올릴 장소명 인포윈도우를 생성합니다.
        var rLabel = new kakao.maps.InfoWindow({
            content: '우회전'
        });
        rLabel.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
        rLabel.open(rv, rMarker); 

        var rMarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.657892, 127.059338),
            map: rv //map 대신 rv(로드뷰 객체)로 설정하면 로드뷰에 올라갑니다.
        });
        rMarker.setAltitude(1); //마커의 높이를 설정합니다. (단위는 m입니다.)
        rMarker.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
    
        // 로드뷰에 올릴 장소명 인포윈도우를 생성합니다.
        var rLabel = new kakao.maps.InfoWindow({
            content: '직진'
        });
        rLabel.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
        rLabel.open(rv, rMarker); // open시 마커를 넣어주면, 마커의 altitude와 position값을 모두 따라 갑니다.
        //
        var rMarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.657892, 127.059338),
            map: rv //map 대신 rv(로드뷰 객체)로 설정하면 로드뷰에 올라갑니다.
        });
        rMarker.setAltitude(1); //마커의 높이를 설정합니다. (단위는 m입니다.)
        rMarker.setRange(30); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
    
        // 로드뷰에 올릴 장소명 인포윈도우를 생성합니다.
        var rLabel = new kakao.maps.InfoWindow({
            content: '시작'
        });
        rLabel.setRange(50); //마커가 보일 수 있는 범위를 설정합니다. (단위는 m입니다.)
        rLabel.open(rv, rMarker);
        // 로드뷰 마커가 중앙에 오도록 로드뷰의 viewpoint 조정합니다.
        var projection = rv.getProjection(); // viewpoint(화면좌표)값을 추출할 수 있는 projection 객체를 가져옵니다.
        
        // 마커의 position과 altitude값을 통해 viewpoint값(화면좌표)를 추출합니다.
        var viewpoint = projection.viewpointFromCoords(rMarker.getPosition(), rMarker.getAltitude());
        rv.setViewpoint(viewpoint); //로드뷰에 뷰포인트를 설정합니다.
    });
    }
    render(){
    return (
    <div class="map_wrap">
    <div id="mapWrapper" style={{width:"50%",height:"500px",float:"left"}}>
        <img src={dobongA}></img>
    </div>
    <div id="rvWrapper" style={{width:"50%",height:"1000PX",float:"left"}}>
        <div id="myMap" style={{width:"100%", height:"400px"}}></div>
        <div id="roadview" style={{width:"100%", height:"400PX"}}></div>
    </div>
</div>
    )}
};

export default Road;