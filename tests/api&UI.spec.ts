// 1. Go to computers section
// 2. Select desktops from dropdown
// 3. Select any computer 
// 4. Get list of the computers present with prices


import {test,expect,request} from '@playwright/test';
import { computerSection } from '../pages/api&UI.page';

test('Computers API + UI', async ({page}) =>  {

    const sectionComputer= new computerSection(page);
    await sectionComputer.navigateComputers();
    await sectionComputer.computerDropdown();
    await sectionComputer.computerChoice();
    await sectionComputer.selectOptions();
    console.log('name off the computer:', await sectionComputer.getComputerName());
})
