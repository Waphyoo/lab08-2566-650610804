export const Footer = (input) => {
  return (
    <div class="mt-3">
      <p className="text-secondary text-center">
        copyright © {input.year} {input.fullName} {input.studentId}
      </p>
    </div>
  );
};
