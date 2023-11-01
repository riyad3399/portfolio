
const Footer = () => {

    const date = new Date().getFullYear()
    console.log(date);

    return (
      <div className="bg-zinc-800 text-sm p-4 text-center text-white">
        Copyright © {date} Riyad khan. All Right reserved.
      </div>
    );
};

export default Footer;