## first commit

### pre-work
Create repository for 'react-study' on github

### work
$ mkdir react-study
$ cd .\react-study\
$ git init
$ echo "# react-study" >> README.md
$ git init
$ git add .\README.md
$ git commit -m "fisrt commti"
$ git log
$ git commit --amend
$ git remote add origin https://github.com/leehunkyu00/react-study.git
$ git push -u origin master

.gitignore 파일 생성
node_modules 작성


## "Hello World!" with React.js

### pre-work
Visual studio code 설치


### work
$ npm install react react-dom
$ npm install --save-dev react-scripts
$ code .

package.json 수정
"scripts": {
	"start": "react-scripts start",
	"build": "react-scripts build",
	"eject": "react-scripts eject",
},

src폴더 생성후 index.js 파일 생성
src/index.js
// 코드 작성
mport React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
    render() {
        return (
            <div>
                Hello world!!
            </div>
        )
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
)
//


public폴더 생성
favicon.ico 복붙
index.html 복붙
manifest.json 복붙


terminal에서 
$ npm start
그리고 localhost:3000 에서 확인


## index.css 적용

src/에 index.css적용학
index.js에 import 