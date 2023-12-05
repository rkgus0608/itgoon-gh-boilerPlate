import React from 'react';
import { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom';

/**
 * glob : vite에서 지원하는 기능, 파일 시스템에서 여러 모듈 가져오기 기능
 * Record : {Key : Type}으로 이루어진 객체타입, 
 *         - typescript에서 객체의 key의 문자열을 사용할 경우 오류 발생하나 Record는 key의 문자열 리터럴을 허용한다.
 * PAGES : /src/pages/ 내 a-z 로 시작하는 tsx 파일들
 * APPS : /src/pages/ 내 _app | _notFound 페이지
 * Fragment : 태그로 사용, <></> 와 같은 역할 (필요없는 div로 묶기 방지)
 *           
 * 
 */
 

const PAGES:Record<string, {[key:string]:any}> = import.meta.glob('/src/pages/**/[a-z[]*.tsx');
// const APPS :Record<string, {[key:string]:any}> = import.meta.glob('/src/pages/(_app|_notFound).tsx');

const pages = Object.keys(PAGES).map((page) => {
    const path = page.replace(/\/src\/pages|index|\.tsx$/g, '').replace(/\[\.{3}.+\]/, '*').replace(/\[(.+)\]/, ':$1');

    return {path, page : PAGES[page].default}
})
 
export const Router = ()=>{  

    //  const App = APPS?.['_app'] || Fragment;
    // const NotFound =  APPS?.['_notFound'] || Fragment;

    return (
        // <App>
            <Routes>
                {pages.map(({path, page : Page = Fragment}) => {
                    console.log({path}, {Page});
                    return (
                        <Route key={path} path={path} Component={Page} />
                    ) 
                })}
                {/* <Route path='*' component={NotFound}/> */}
            </Routes>
        // {/* </App> */}
    )
}