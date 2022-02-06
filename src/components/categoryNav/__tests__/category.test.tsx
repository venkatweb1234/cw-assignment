import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import CategoryNav from "..";
const MockCompoent = ({id}: {id?:string}) =>{
return <div data-testid={id}></div>
}

const MockRoutes = [
    {
        path:'/products',
        element:MockCompoent,
    },
    {
        path:'/products/:id',
        element:MockCompoent,
        props:{id:'2'}
    }
]

describe('Category Route compoent', () =>{
    it('Should render the routes', () =>{
        render(<MemoryRouter>
            <CategoryNav />
        </MemoryRouter>)
        expect(screen.getByTestId('2')).toBeInTheDocument()
    })
})