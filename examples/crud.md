# CRUD 範例

```ts
import { useTaskStore } from '@/stores/useTaskStore';

const store = useTaskStore();
await store.loadTasks();
```
