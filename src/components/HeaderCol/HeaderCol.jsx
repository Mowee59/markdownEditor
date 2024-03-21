import StyledHeaderCol from "./HeaderCol.styled";

const HeaderCol = ({title, aside}) => ( 

    <StyledHeaderCol>
       {title && <h4>{ title }</h4>}
       {aside && <h6>{ aside} </h6>}
    </StyledHeaderCol>

);

export default HeaderCol;