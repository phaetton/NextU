/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TiendaDatabaseService } from './tienda-database.service';

describe('TiendaDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiendaDatabaseService]
    });
  });

  it('should ...', inject([TiendaDatabaseService], (service: TiendaDatabaseService) => {
    expect(service).toBeTruthy();
  }));
}); 
