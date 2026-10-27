import { whatsapp } from '../config/site';

/** wa.me link with a URL-encoded prefilled message (default message if omitted). */
export function waLink(message: string = whatsapp.defaultMessage): string {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function waPackageLink(packageName: string): string {
  return waLink(`${whatsapp.defaultMessage} ${whatsapp.packageMessage(packageName)}`);
}
