import React from 'react';
import BigText from './BigText';
import { Link } from '@version/react-router-v3';
import "./board.css";

const Board = () => {
    return (
        <div className="boarddiv">
           <BigText>게시판</BigText>
           <table class="table table-hover">
                            <thead>
                                <tr>
                                    <td width="10%">게시글번호</td>
                                    <td width="30%">제목</td>
                                    <td width="10%">글쓴이</td>
                                    <td width="10%">등록날짜</td>
                                    <td width="10%">조회수</td>
                                    <td width="10%">추천수</td>
                                </tr>
                                <tr>
                                    <td width="10%">1</td>
                                    <td width="30%">제목</td>
                                    <td width="10%">글쓴이</td>
                                    <td width="10%">등록날짜</td>
                                    <td width="10%">조회수</td>
                                    <td width="10%">추천수</td>
                                </tr>
                                <tr>
                                    <td width="10%">2</td>
                                    <td width="30%">제목</td>
                                    <td width="10%">글쓴이</td>
                                    <td width="10%">등록날짜</td>
                                    <td width="10%">조회수</td>
                                    <td width="10%">추천수</td>
                                </tr>
                                <tr>
                                    <td width="10%">3</td>
                                    <td width="30%">제목</td>
                                    <td width="10%">글쓴이</td>
                                    <td width="10%">등록날짜</td>
                                    <td width="10%">조회수</td>
                                    <td width="10%">추천수</td>
                                </tr>
                            </thead>
                            
                        </table>
                        
                        <Link to="/dda/BoardWriteForm">
                        
                        <input type="button" value="글쓰기" id="btn_newcontent" class="btn"></input>
                        
                        </Link>
        </div>
        
    );
};

export default Board;