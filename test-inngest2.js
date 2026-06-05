const { Inngest } = require("inngest");
const inngest = new Inngest({ id: "test" });
try {
  inngest.createFunction({ id: "test-fn", event: "test.event" }, async () => {});
  console.log("2 args with event directly on config worked");
} catch (e) {
  console.error("2 args with event directly on config failed", e.message);
}
try {
  inngest.createFunction({ id: "test-fn2", triggers: [{ event: "test.event" }] }, async () => {});
  console.log("2 args with triggers array worked");
} catch (e) {
  console.error("2 args with triggers array failed", e.message);
}
