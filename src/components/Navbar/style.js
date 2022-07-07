import styledComponents from "styled-components";

export const NavWrapper = styledComponents.div`
background-color:#fdb73b;
font-family: 'Poppins', sans-serif;
Form{
    background-color:#fff;
    margin-left:40px;
    height:40px;
    padding:0 20px;
    border-radius: 100px;
    input{
        border:none;
        margin-top:0px;
    }
    input:focus{
        box-shadow:none;
    }
}
.nav-link{
    color: rgb(0 0 0) !important;
}
`