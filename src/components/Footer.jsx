const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center py-6 mt-12 mb-0">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MaaChamundaCraft. All rights reserved.
      </p>
      <p className="text-xs mt-1">Made with ❤️ by your friendly carpenter</p>
    </footer>
  );
};

export default Footer;
