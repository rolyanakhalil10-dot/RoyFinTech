import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function Component() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand src="/asset.png" alt=" Logo" name="royfintech" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">Flowbite</FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="RoyFinTech" year={2026} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="#"
              icon={BsFacebook as React.FC<React.SVGProps<SVGSVGElement>>}
            />
            <FooterIcon
              href="#"
              icon={BsInstagram as React.FC<React.SVGProps<SVGSVGElement>>}
            />
            <FooterIcon
              href="#"
              icon={BsTwitter as React.FC<React.SVGProps<SVGSVGElement>>}
            />
            <FooterIcon
              href="#"
              icon={BsGithub as React.FC<React.SVGProps<SVGSVGElement>>}
            />
            <FooterIcon
              href="#"
              icon={BsDribbble as React.FC<React.SVGProps<SVGSVGElement>>}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
