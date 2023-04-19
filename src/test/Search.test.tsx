import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { mainStore } from '../state/mainState';
import {Search} from "../components/Search";

jest.mock('../state/mainState');

interface MockedMainStore extends jest.Mocked<typeof mainStore> {
    mockReturnValue: (value: any) => void;
}

const mockedMainStore = mainStore as MockedMainStore;

describe('Search component', () => {
    beforeEach(() => {
        mockedMainStore.mockReturnValue({
            currencies: [
                { cc: 'USD', txt: 'US Dollar', rate: 26.00 },
                { cc: 'EUR', txt: 'Euro', rate: 30.00 },
                { cc: 'GBP', txt: 'British Pound', rate: 35.00 }
            ],
            setSearchResult: jest.fn(),
            setSearchInputIsEmpty: jest.fn(),
        });
    });

    it('should filter currencies by search query', () => {
        const { getByRole } = render(<Search />);
        const input = getByRole('textbox');

        fireEvent.change(input, { target: { value: 'US Dollar' } });

        expect(mockedMainStore().setSearchResult).toHaveBeenCalledWith([
            { cc: 'USD', txt: 'US Dollar', rate: 26.00 }
        ]);
    });

    it('should set setSearchInputIsEmpty to false when search query is not empty', () => {
        const { getByRole } = render(<Search />);
        const input = getByRole('textbox');

        fireEvent.change(input, { target: { value: 'US' } });

        expect(mockedMainStore().setSearchInputIsEmpty).toHaveBeenCalledWith(false);
    });

    it('should not set setSearchInputIsEmpty to false when search query is empty', () => {
        const { getByRole } = render(<Search />);
        const input = getByRole('textbox');

        fireEvent.change(input, { target: { value: '' } });

        expect(mockedMainStore().setSearchInputIsEmpty).not.toHaveBeenCalled();
    });
});