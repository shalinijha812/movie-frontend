import { ModuleHeaderModule } from './module-header.module';

describe('ModuleHeaderModule', () => {
  let moduleHeaderModule: ModuleHeaderModule;

  beforeEach(() => {
    moduleHeaderModule = new ModuleHeaderModule();
  });

  it('should create an instance', () => {
    expect(moduleHeaderModule).toBeTruthy();
  });
});
