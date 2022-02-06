import {render, screen} from '@testing-library/react';
import Header from '..';

describe('Header Component',() =>{
    it('render Header Component correctly with data', () => {
        render(<Header />);
        expect(screen.getByText('Plates')).toBeInTheDocument();
        expect(screen.getByTestId('description').textContent).toContain('Lorem ipsum dolor sit amet')
      });
})