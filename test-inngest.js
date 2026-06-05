const { Inngest } = require("inngest");
const inngest = new Inngest({ id: "test" });
try {
  inngest.createFunction({ id: "test-fn" }, { event: "test.event" }, async () => {});
  console.log("3 args worked");
} catch (e) {
  console.error("3 args failed", e.message);
}
