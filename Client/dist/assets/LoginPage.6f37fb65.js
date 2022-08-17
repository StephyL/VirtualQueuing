import{s as e,r as d,a as t,F as c,j as s}from"./index.9f59fa28.js";import{l}from"./Logo-v5.756ba38c.js";var p="/assets/Button_Password-hide.58242df9.svg",g="/assets/Button_ShowPassword.f771c242.svg",h="/assets/Button_Password-show.cbb0908a.svg",u="/assets/Button_Password-showActive.8f666285.svg";const f=e.div`
  width:370px;
  height:400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  font-family: Arial, Helvetica, sans-serif;
`,x=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  & h2 {
    font-size: 20px;
    margin: 35px 0 0 0;
  }
  & p{
    font-size: 15px;
    color: ${({theme:o})=>o.colors.fonts.secondary};
    margin: 15px 0;
  }
`,n=e.input`
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: ${({theme:o})=>o.colors.fonts.inactiveRoute} solid 1px;
  ::placeholder {
    color: ${({theme:o})=>o.colors.fonts.inactiveRoute};
    font-size: ${({theme:o})=>o.fontSizes.xxs};
  }
`,w=e.div`
  display: flex;
  position: relative;
`,i=e.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  background-image: url(${p});
  background-size: 100% 100%;
  right: 15%;
  top: 50%;
  :hover {
    background-image: url(${g});
    cursor: pointer;
  }
`,v=e(i)`
  background-image: url(${h});
  :hover {
    background-image: url(${u});
  }
`,m=e.div`
  width: 80%;
  margin: 5px 10% 0 10%;
  display: flex;
  justify-content: space-between;
  & h6{
    font-size: ${({theme:o})=>o.fontSizes.xxxs};
    margin: 3% 2% 3% 0;
  }
  & h6:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`,b=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 5% 10% 0 10%;
  height: 35px;
  border-radius: 5px;
  background-color: ${({theme:o})=>o.colors.page.main};
  color: #fff;
  & p{
    font-size: ${({theme:o})=>o.fontSizes.lg};
    font-weight: 500;
  }
  :hover{
    cursor: pointer;
    background-color: ${({theme:o})=>o.colors.components.loginButton.hover};
    
  }
`,y=e.div`
  width: 120px;
  height: 60px;
  margin: 4% 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${l});
  background-size: 100% 100%;
`,k=()=>{const[o,a]=d.exports.useState(!1),r=()=>{a(!o)};return t(c,{children:s(f,{children:[s(x,{children:[t("h2",{children:"Agent Login"}),s("p",{children:["Hey, Enter your details to get ",t("br",{})," sign in to your account"]})]}),t(n,{type:"text",placeholder:"Enter Email / Phone No"}),s(w,{children:[t(n,{type:o?"text":"password",placeholder:"Enter Password"}),o?t(v,{onClick:r}):t(i,{onClick:r})]}),s(m,{children:[t("h6",{children:"Having trouble in sign in?"}),t("h6",{children:t("a",{href:"/signup",children:"Sign up"})})]}),t(b,{children:t("p",{children:"Sign in"})}),t(y,{})]})})};export{v as HidePassword,w as InputPassword,b as LoginButton,f as LoginContainer,x as LoginInfo,n as LoginInput,y as Logo,m as SetAccount,i as ShowPassword,k as default};
