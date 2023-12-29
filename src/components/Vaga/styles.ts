import styles from 'styled-components'

export const Card = styles.li`
  border: 1px solid ${(props) => props.theme.CorPrincipal};
  background-color: ${(props) => props.theme.CorSecundaria};
  color: ${(props) => props.theme.CorPrincipal};
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.CorPrincipal};
    color: ${(props) => props.theme.CorSecundaria};

    & a {
      border-color: ${(props) => props.theme.CorPrincipal};
      background-color: ${(props) => props.theme.CorSecundaria};
      color: ${(props) => props.theme.CorPrincipal};
    }
  }
`
export const CardTitle = styles.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const CardLink = styles.a`
  border-color: ${(props) => props.theme.CorSecundaria};
  background-color: ${(props) => props.theme.CorPrincipal};
  color: ${(props) => props.theme.CorSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
