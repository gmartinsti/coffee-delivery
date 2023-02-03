import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Typography";
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
error?: string;
rightText?: string
}

// Método antigo sem uso dos hookform e zod

//   export function Input({...props }: InputProps) {
//     return <InputStyleContainer {...props}>
//       <InputStyled {...props}/>
//     </InputStyleContainer>         
// }

export const Input = forwardRef<HTMLInputElement, InputProps>(({error, rightText,className, ...props}, ref) => {
    return (
          <InputWrapper className={className}>
            <InputStyleContainer hasError={!!error}>
              <InputStyled {...props} ref={ref} />
                {rightText && <RightText>{rightText}</RightText>}
            </InputStyleContainer>
            {error && <RegularText size="s">{error}</RegularText>}
          </InputWrapper>
  );
  });