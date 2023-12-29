import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.CorSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`
export const BotaoPesquisar = styled.button`
  background-color: ${(props) => props.theme.CorPrincipal};
  border: 1px solid ${(props) => props.theme.CorPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.CorSecundaria};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`
export const CampoInput = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.CorPrincipal};

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`
