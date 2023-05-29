import LoginButton from "../../Components/Login/LoginButton/LoginButton";
import { render, screen } from "@testing-library/react";

it("Deve renderizar o botão corretamente", () => {
    render(
        <LoginButton/>
    )
    const btn = screen.getByText("LOGIN");
    //espera que o botão esteja no documento
    expect(btn).toBeInTheDocument()
    expect(btn).toMatchSnapshot();
})
