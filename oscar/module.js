// module
module.exports = function () {
  console.log('hello from a commonjs module');
};

// ES MODULES

// anonymous default export

// why??
// small modules or utility functions, keeps the code concise.
// avoids redundancy; in many cases the default export is often imported with a
// Custom name, which can make the original name redundant
export default function greet() {
  console.log('hello from a ES module');
}
