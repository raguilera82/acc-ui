import { newE2EPage } from '@stencil/core/testing';

describe('acc-autocomplete', () => {

  it ('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<acc-autocomplete label="Fruits"></acc-autocomplete>');
    const el = await page.find('acc-autocomplete');
    expect(el).not.toBeNull();
    await el.callMethod('setLabel', 'Frutas')
    el.getProperty('label').then((p) => {
      expect(p).toBe('Frutas');
    });
    
  });
  
});
