export default ({ types: t }) => ({
  visitor: {
    ImportDeclaration(path) {
      const { node } = path;
      const { specifiers, source } = node;
      const { value: pkgId } = source;

      if (pkgId !== 'date-fns' && pkgId !== 'date-fns/locale') {
        return;
      }

      if (!specifiers.filter(t.isImportSpecifier).length) {
        return;
      }

      specifiers.forEach((spec) => {
        const { local, imported } = spec;
        const { name: localName } = local;

        let importedPath = pkgId;

        if (t.isImportSpecifier(spec)) {
          let { name: importedName } = imported;
          spec = t.importDefaultSpecifier(t.identifier(localName));

          if (pkgId === 'date-fns/locale') {
            importedName = importedName.replace(/[A-Z]/, '-$&');
          }

          importedPath = `${pkgId}/${importedName}`;
        }

        path.insertAfter(t.importDeclaration([spec], t.stringLiteral(importedPath)));
      });

      path.remove();
    },
  },
});
