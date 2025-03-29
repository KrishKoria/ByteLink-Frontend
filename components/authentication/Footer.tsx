export function Footer() {
  return (
    <footer className="border-t py-4 bg-muted/30">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} ByteLink. All rights reserved.</p>
      </div>
    </footer>
  );
}
