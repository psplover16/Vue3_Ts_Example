import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/stores/useCounterStore';

describe('store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('counter store should increment', () => {
    const store = useCounterStore();
    store.increment();
    expect(store.count).toBe(1);
  });
});
