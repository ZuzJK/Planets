import {render,screen} from '@testing-library/react';
import StatisticsItem from './StatisticsItem';

describe("dd fff dd", () => {

    it("dsdsd", () => {

        render(<StatisticsItem data={{title: 'radius'}}/>)
        const card = screen.getByText('/radius/');
        expect(card).toBeInTheDocument();
    });
    it("asasasas", () => {

    })
});