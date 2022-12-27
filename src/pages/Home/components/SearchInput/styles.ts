import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  width: 100%;
  margin: 4.5rem 0 3rem 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    h3 {
      font-size: ${({ theme }) => theme.textSizes['title-title-s']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span {
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    color: ${({ theme }) => theme.colors['base-text']};
    transition: 0.4s;

    &:focus {
      border-color: ${({ theme }) => theme.colors['brand-blue']};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
