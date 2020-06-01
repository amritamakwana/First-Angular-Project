import { TestBed } from '@angular/core/testing';

import { PostDetailGuardGuard } from './post-detail-guard.guard';

describe('PostDetailGuardGuard', () => {
  let guard: PostDetailGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostDetailGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
