# EveryxDemo

## Migrate Context from legacy to new

Legacy Context를 사용할 경우 다음과 같은 에러가 표시됨.

```
Warning: Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: Button, MessageList

Learn more about this warning here: https://reactjs.org/link/legacy-context
```

Legacy Context는 React 16.3에서 도입되었으나 이후 major 버전에서는 삭제예정이라고 함.

Legacy Context
https://reactjs.org/docs/legacy-context.html

New Context
https://ko.reactjs.org/docs/context.html