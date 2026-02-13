import { describe, it, expect } from 'vitest';
import { routes } from '@/router/routes';

describe('router', () => {
  it('should have base routes', () => {
  const paths = routes.map((route) => route.path);
    expect(paths).toContain('/');
    expect(paths).toContain('/forms');
    expect(paths).toContain('/crud');
  });
});
