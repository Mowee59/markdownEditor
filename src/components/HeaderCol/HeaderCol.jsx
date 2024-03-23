import StyledHeaderCol from "./HeaderCol.styled";

const HeaderCol = ({title, aside}) => ( 

    <StyledHeaderCol>
       {title && <h4>{ title }</h4>}
       {aside && <img src={aside}/> }
    </StyledHeaderCol>

);

export default HeaderCol;