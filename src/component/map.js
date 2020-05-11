/*global kakao*/
import React , { Component } from "react";
import {Container , Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './map.css';

class MapContent extends Component {
	componentDidMount= () => {
    var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.552258, 126.993913), //지도의 중심좌표.
        level: 9 //지도의 레벨(확대, 축소 정도)
		};
		this.map = new kakao.maps.Map(container, options);
		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			position: new kakao.maps.LatLng(37.658864, 127.058126)
		});
		marker.setMap(this.map);
		marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(37.507871,127.067447)
		});
		marker.setMap(this.map);
		marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(37.550586,126.821337) 
		});
		marker.setMap(this.map);
		marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(37.581227, 126.881529)
		});
			marker.setMap(this.map); //지도 생성 및 객체 리턴
  }

dobong = () => {
  var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
  var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.658864, 127.058126), //지도의 중심좌표.
      level: 5 //지도의 레벨(확대, 축소 정도
 	};
  this.map = new kakao.maps.Map(container, options);
  // 마커가 표시될 위치입니다 
  var markerPosition  = new kakao.maps.LatLng(37.658864, 127.058126); 
    
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">서울 노원구 동일로 1449 도봉운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 documentelement가 가능합니다
   iwPosition = new kakao.maps.LatLng(37.658864, 127.058126), //인포윈도우 표시 위치입니다
   iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}  
gangnam = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.507871,127.067447), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
	 };
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.507871,127.067447); 
 
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">서울 강남구 테헤란로114길 23 강남운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
	 iwPosition = new kakao.maps.LatLng(37.507871,127.067447), //인포윈도우 표시 위치입니다
	 iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
gangseo = () => {
  var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
  var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.550586,126.821337), //지도의 중심좌표.
      level: 5 //지도의 레벨(확대, 축소 정도
 	};
  this.map = new kakao.maps.Map(container, options);
  // 마커가 표시될 위치입니다 
  var markerPosition  = new kakao.maps.LatLng(37.550586,126.821337); 
    
  //마커를 생성합니다
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">서울 강서구 남부순환로 171 강서운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 documentelement가 가능합니다
   iwPosition = new kakao.maps.LatLng(37.550586, 126.821337), //인포윈도우 표시 위치입니다
   iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
	}
seobu = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.581227, 126.881529), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
	 };
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.581227, 126.881529); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">서울특별시 마포구 상암동 451-6 서부운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
	 iwPosition = new kakao.maps.LatLng(37.581227, 126.881529), //인포윈도우 표시 위치입니다
	 iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
	}	
    render() {
        return (
					<div>
					<Container className="map">
					<Row>
						<Col className="korea1" xs={12} md={4} style={{padding:"0px 0px 0px 0px"}}>
							<div className="testarea"><h1>전국 시험장 안내</h1></div>
							<div className="korea">
							<h4>서울</h4>
							<Button className="btn"	size="sm" onClick={this.dobong} variant="secondary">도봉</Button>
							<Button className="btn"	size="sm" onClick={this.gangnam} variant="secondary">강남</Button>
							<Button className="btn"	size="sm" onClick={this.seobu} variant="secondary">서부</Button>
							<Button className="btn"	size="sm" onClick={this.gangseo} variant="secondary">강서</Button>
							<h4>경기</h4>
							<Button className="btn"	size="sm" onClick={this.dobong} variant="secondary">도봉</Button>
							<Button className="btn"	size="sm" onClick={this.gangnam} variant="secondary">강남</Button>
							<Button className="btn"	size="sm" onClick={this.seobu} variant="secondary">서부</Button>
							<Button className="btn"	size="sm" onClick={this.gangseo} variant="secondary">강서</Button>
							<h4>강원</h4>
							<Button className="btn"	size="sm" onClick={this.dobong} variant="secondary">도봉</Button>
							<Button className="btn"	size="sm" onClick={this.gangnam} variant="secondary">강남</Button>
							<Button className="btn"	size="sm" onClick={this.seobu} variant="secondary">서부</Button>
							<Button className="btn"	size="sm" onClick={this.gangseo} variant="secondary">강서</Button>
							<h4>충청</h4>
							<Button className="btn"	size="sm" onClick={this.dobong} variant="secondary">도봉</Button>
							<Button className="btn"	size="sm" onClick={this.gangnam} variant="secondary">강남</Button>
							<Button className="btn"	size="sm" onClick={this.seobu} variant="secondary">서부</Button>
							<Button className="btn"	size="sm" onClick={this.gangseo} variant="secondary">강서</Button>
							<h4>전라</h4>
							<Button className="btn"	size="sm" onClick={this.dobong} variant="secondary">도봉</Button>
							<Button className="btn"	size="sm" onClick={this.gangnam} variant="secondary">강남</Button>
							<Button className="btn"	size="sm" onClick={this.seobu} variant="secondary">서부</Button>
							<Button className="btn"	size="sm" onClick={this.gangseo} variant="secondary">강서</Button>
							<h4>경상</h4>
							<Button className="btn"	size="sm" onClick={this.dobong} variant="secondary">도봉</Button>
							<Button className="btn"	size="sm" onClick={this.gangnam} variant="secondary">강남</Button>
							<Button className="btn"	size="sm" onClick={this.seobu} variant="secondary">서부</Button>
							<Button className="btn"	size="sm" onClick={this.gangseo} variant="secondary">강서</Button>
							<h4>제주</h4> 
							<Button className="btn"	size="sm" onClick={this.dobong} variant="secondary">도봉</Button>
							<Button className="btn"	size="sm" onClick={this.gangnam} variant="secondary">강남</Button>
							<Button className="btn"	size="sm" onClick={this.seobu} variant="secondary">서부</Button>
							<Button className="btn"	size="sm" onClick={this.gangseo} variant="secondary">강서</Button>
							</div>
							</Col>
							<Col xs={12} md={8} style={{padding:"0px 0px 0px 0px"}}>
          		<div id='myMap' style={{ height:'70vh' , width:'100%'}}></div>
						</Col>
					</Row>
					</Container>
					</div>
										
        )
    }
}
export default MapContent;

